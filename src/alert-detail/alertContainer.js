import { useRef, useState, useEffect, ReactDOM } from "react";
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import Mylib from '../my-function/mylib';
import useInitialfocus from '../lib/useInitialFocus';
import {
    Link,
    useNavigate
} from "react-router-dom";
import ApiService from "../api-service/apiService";
import "./css/main.css";

const mylib = new Mylib();

export default function AlertContainer(props) {
    const [s, setS] = useState("Lorem ipsum dolor sit amet  Lorem ipsum dolor sit amet  ");
    // const [isShow, setIsShow] = useState();
    const [checkStringLength15, setStringLength15] = useState("")
    const { t } = useTranslation();
    const [showDateDiff, setShowDateDiff] = useState("");
    const [showDateDiffType, setShowDateDiffType] = useState("");
    const alertRef = useRef(null);
    const [forceRender, setForceRender] = useState(0);
    const navigate = useNavigate()
    const notificationData = props.notificationData;
    useEffect(() => {
        // replaceString(s, 40);
        dateDiff()
        updateNotification();
    }, [s, props.isShow, props]);

    function replaceString(s, maxText) {
        var arr = s.split("");
        if (arr.length < maxText) return s.trim();;
        arr.splice(maxText, (arr.length - 1), '...');
        var result = arr.join("");
        return result.trim();
    }

    function dateDiff(startDate) {
        const currentDate = mylib.createDate();
        const dateDiff = mylib.calculateDays(startDate, currentDate.fullFormat);
        let diffCount = 0;
        let diffText = "";

        // if (dateDiff.asSeconds < 60) { setShowDateDiff(parseInt(dateDiff.asSeconds)); setShowDateDiffType("second"); return; }
        // if (dateDiff.asMinutes < 60) { setShowDateDiff(parseInt(dateDiff.asMinutes)); setShowDateDiffType("minute"); return; }
        // if (dateDiff.asHours < 60) { setShowDateDiff(parseInt(dateDiff.asHours)); setShowDateDiffType("hour"); return; }
        // if (dateDiff.asDays <= 30) { setShowDateDiff(parseInt(dateDiff.asDays)); setShowDateDiffType("day"); return; }
        // if (dateDiff.asMonths <= 12) { setShowDateDiff(parseInt(dateDiff.asSeconds)); setShowDateDiffType("month"); return; }
        // setShowDateDiff(parseInt(dateDiff.asYears));
        // setShowDateDiffType("year");

        if (dateDiff.asSeconds < 60) { diffCount = dateDiff.asSeconds; diffText = "second"; }
        else if (dateDiff.asMinutes < 60) { diffCount = dateDiff.asMinutes; diffText = "minute"; }
        else if (dateDiff.asHours < 24) { diffCount = dateDiff.asHours; diffText = "hour"; }
        else if (dateDiff.asDays < 30) { diffCount = dateDiff.asDays; diffText = "day"; }
        else if (dateDiff.asMonths < 12) { diffCount = dateDiff.asMonths; diffText = "month"; }
        else { diffCount = dateDiff.asYears; diffText = "year"; }
        return { diffNumber: parseInt(diffCount), diffText: diffText };

    }

    function handleFocus() {
        alertRef.current.focus()
        setForceRender(prev => prev += 1)
    }

    async function updateNotification() {
        const apiService = new ApiService();
        const res = await apiService.updateKnowNotification();
        props.setCountNewAlert(0);
        // const newAlert = await apiService.fetchNewAlert();
        // console.log(newAlert);
    }


    return (
        <>
            <div className="alert-container extra" ref={alertRef} style={{ height: props.contentHeight / 2 }} >

                {
                    notificationData.map((value, index) => (
                        <div className="alert-wrapper line-items" onClick={() => { navigate(`/alert-detail/${value.postId}`); props.setUrlGoto(`/alert-detail/${value.postId}`); window.location.reload(); }}>
                            <div className="alert-img d-flex align-items-center">
                                <img src={`${value.profileIcon}`} alt="" className="" />
                            </div>
                            <div className="alert-message">
                                <p className="m-0 ">{replaceString(value.displayName, 40)}</p>
                                <p className="m-0 font-color-main">{replaceString(value.caption, 40)}</p>
                                <p className="mb-0 mt-1 font-color-main">{dateDiff(value.postCreated).diffNumber} {
                                    dateDiff(value.postCreated).diffText === "second"
                                        ? t("alertDateDiffSec")
                                        : dateDiff(value.postCreated).diffText === "minute"
                                            ? t("alertDateDiffMin")
                                            : dateDiff(value.postCreated).diffText === "hour"
                                                ? t("alertDateDiffHour")
                                                : dateDiff(value.postCreated).diffText === "day"
                                                    ? t("alertDateDiffDay")
                                                    : dateDiff(value.postCreated).diffText === "month"
                                                        ? t("alertDateDiffMonth")
                                                        : t("alertDateDiffYear")
                                }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}