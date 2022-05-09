import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TypeButton from "./typeButton";
import "./css/main.css";

export default function TypeFeed(props) {
    const mainStyle = { height: props.height, backgroundColor: "#fff" };
    const buttonFeed = ["DAILY", "FOLLOW", "CONTENT", "AWARDS", "SPECIAL"];
    const listStyle = { padding: "0px", margin: "0px 5px", };
    const [currentFeedType, setCurrentFeedType] = useState("");
    const [displayShow, setDisplayShow] = useState("");
    const { t } = useTranslation();

    function handleCurrentFeedType(type) {
        handleLanguage(type);
        setCurrentFeedType(type);
    }

    function handleLanguage(text) {
        switch (text) {
            case "DAILY":
                setDisplayShow(t("displayDaily"));
                break;
            case "FOLLOW":
                setDisplayShow(t("displayFollow"));
                break;
            case "CONTENT":
                setDisplayShow(t("displayCotent"));
                break;
            case "AWARDS":
                setDisplayShow(t("displayAward"));
                break;
            case "SPECIAL":
                setDisplayShow(t("displaySpecial"));
                break;
            default:
        }
    }

    useEffect(() => {
        handleLanguage("DAILY");
        setCurrentFeedType("DAILY");
    }, [])
    return (
        <div className="type-feed-container text-center" style={mainStyle}>
            <div className="type-feed-wrapper">
                <div className="type-feed-header d-flex justify-content-center">
                    <ul className="list-group-horizontal ul-type-feed">
                        {
                            buttonFeed.map((value, index) => (
                                <li
                                    key={index}
                                    className="list-group-item"
                                    style={listStyle}
                                >
                                    <TypeButton
                                        className={`${currentFeedType === value ? "type-active" : ""}`}
                                        text={value}
                                        currentValue={value}
                                        setCurrentFeedType={handleCurrentFeedType}
                                    />
                                </li>
                            ))
                        }

                        <li className="list-group-item" style={listStyle}><TypeButton className={`${currentFeedType === "feedTypeImage" ? "type-active" : ""}`} currentValue="feedTypeImage" setCurrentFeedType={handleCurrentFeedType} children={<img src="https://d1j5kpxxhf5l74.cloudfront.net/images/icons/svg/feed/icon-filter-animate.svg" alt="" width="20" />} /></li>
                    </ul>
                </div>
                <div className="type-feed-footter">
                    <div className="dess">
                        <span className="text-theme">{t("display")}  : </span>
                        <span className="filter-name">{displayShow}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}