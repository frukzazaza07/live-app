import { useRef, useState, useEffect } from "react";
import 'react-slideshow-image/dist/styles.css'
import StickerSlideHeader from './stickerSlideHeader'
import StickerInfoSlideHeader from './stickerInfoSlideHeader'
import ApiService from '../../api-service/apiService';
import ModalLoading from '../../modal/modalLoading';
import './css/main.css'
const apiService = new ApiService();
export default function StickerSlide(props) {
    const [stickerPackageData, setStickerPackageData] = useState([]);
    const [stickerPackageInfoData, setStickerPackageInfoData] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [showStickerModal, setShowStickerModal] = useState(false);
    const [stickerSelected, setStickerSelected] = useState("");
    const noData = "No data.";
    useEffect(() => {
        fetchStickerPackage();

    }, [])

    async function fetchStickerPackage() {
        setLoadingStatus(true);
        const stickerData = await apiService.fetchStickerPackageApi();
        setStickerPackageData(stickerData);
        setLoadingStatus(false);
    }
    async function fetchStickerPackageInfo(packageId) {
        setLoadingStatus(true);
        const stickerData = await apiService.fetchStickerPackageInfoApi(packageId);
        setStickerPackageInfoData(stickerData);
        setLoadingStatus(false);
    }

    function handleStickerPackageSelected(packageId) {
        fetchStickerPackageInfo(packageId);
    }

    return (
        <div className="sticker-slide-container">
            {
                loadingStatus === true
                    ?
                    <ModalLoading
                        show={loadingStatus}
                        onHide={() => setShowStickerModal(false)}
                        loadingStatus={true}
                    />
                    :
                    <></>
            }
            <div className="sticker-slide-header p-2">


                {
                    stickerPackageData.length === 0
                        ? <span>{noData}</span>
                        :
                        stickerPackageData.body !== undefined && stickerPackageData.body.packageList.length > 0
                            ?
                            stickerPackageData.body.packageList.map((value, index) => (
                                <StickerSlideHeader key={index} stickerPackageIcon={value.packageImg} packageId={value.packageId} packageSelected={handleStickerPackageSelected} />
                            )
                            )
                            : <></>
                }

            </div>
            <div className="sticker-slide-body mt-3 ps-3">
                {
                    stickerPackageInfoData.body !== undefined && stickerPackageInfoData.body.package !== undefined && stickerPackageInfoData.body.package.stickers.length > 0
                        ?
                        stickerPackageInfoData.body.package.stickers.map((value, index) => (
                            <StickerInfoSlideHeader key={index} stickerPackageInfoId={value.stickerId} stickerPackageInfoIcon={value.stickerImg} stickerSelected={stickerSelected} setStickerSelected={setStickerSelected} />
                        )
                        )
                        : <></>
                }
            </div>
        </div>
    )
}