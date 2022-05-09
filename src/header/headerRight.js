import { useRef, useState, useEffect, } from "react";
import { IoSettingsSharp } from 'react-icons/io5';
import { BsFillChatSquareFill } from 'react-icons/bs';
import { AiTwotoneHeart } from 'react-icons/ai';
import {
    Link,
    useNavigate
} from "react-router-dom";
import AlertContainer from '../alert-detail/alertContainer';
import './css/main.css';
import ApiService from '../api-service/apiService';
import getWindowDimensions from '../my-function/getWindowDimensions';
import ModalError from '../modal/modalError';
import { set } from "react-hook-form";
const apiService = new ApiService();
const useFocus = () => {

    const htmlElRef = useRef(null)
    const setFocus = () => { htmlElRef.current && htmlElRef.current.focus() }
    return [htmlElRef, setFocus]
}



export default function HeaderRight(props) {
    const [showAlertDetail, setShowAlertDetail] = useState(false);
    const [checkShow, setCheckShow] = useState(false);
    const test1 = useRef(null);
    const [notificationData, setNotificationData] = useState([]);
    const [urlGoto, setUrlGoto] = useState("");
    const { height } = getWindowDimensions();
    const [countNewAlert, setCountNewAlert] = useState(props.newAlert);
    useEffect(() => {
        loadNotificationDetail();
        if (test1.current) { test1.current.focus() };
    }, [showAlertDetail, urlGoto, test1, height])

    const loadNotificationDetail = async () => {
        const notificationData = await apiService.fetchloadNotificationDetail();
        if (notificationData.status === false) {
            // let errorData = notificationData.error;
            // if (typeof notificationData.error === "object") {
            //     errorData = Object.values(notificationData.error);
            // }
            // setShowErrorModal(true);
            // setDataError(errorData);
            return;
        }
        setNotificationData(notificationData.data);

    }
    return (
        <div className="header-left d-flex justify-content-between">
            <div onBlur={() => { if (urlGoto === "") { setShowAlertDetail(false) } }} tabIndex="0" className="header-icon icon-absolute" ref={test1} onClick={() => { showAlertDetail === true ? setShowAlertDetail(false) : setShowAlertDetail(true); }}>
                {/* <div className="icon-absolute-group" onClick={() => { setShowAlertDetail(true); }}> */}
                <div className="icon-absolute-group">
                    <BsFillChatSquareFill />
                    <AiTwotoneHeart />
                </div>
                <span>{countNewAlert === 0 ? "" : countNewAlert}</span>
                {
                    showAlertDetail === true
                        ?
                        <AlertContainer isShow={showAlertDetail} setShowAlertDetail={setShowAlertDetail} setCheckShow={setCheckShow} setUrlGoto={setUrlGoto} notificationData={notificationData} contentHeight={height} setCountNewAlert={setCountNewAlert} />
                        : <></>
                }

            </div>
            <div className="header-icon">
                <div className="icon-absolute-group"><IoSettingsSharp /></div>
            </div>
        </div>
    )
}