import { useRef, useState, useEffect, } from "react";
import { useTranslation } from "react-i18next";
export default function TypeButton(props) {
    const [languageText, setLanguageText] = useState("");
    const { t } = useTranslation();

    function handleLanguage(text) {
        switch (text) {
            case "DAILY":
                setLanguageText(t("daily"));
                break;
            case "FOLLOW":
                setLanguageText(t("follow"));
                break;
            case "CONTENT":
                setLanguageText(t("content"));
                break;
            case "AWARDS":
                setLanguageText(t("award"));
                break;
            case "SPECIAL":
                setLanguageText(t("special"));
                break;
            default:
        }
    }

    useEffect(() => {
        handleLanguage(props.text);
    })
    return (
        <button
            className={`btn btn-md d-flex align-items-center justify-content-center ${props.className}`}
            onClick={
                () => {
                    if (props.setCurrentFeedType !== undefined) { props.setCurrentFeedType(props.currentValue); }
                    if (props.text !== "FOLLOW") { props.onFollower(props.createPostBy); }
                }
            }>
            {props.text !== undefined ? languageText : ""}
            {props.children !== undefined ? props.children : ""}
            {props.textRight !== undefined ? <span>{props.textRight}</span> : ""}
        </button>
    )
}