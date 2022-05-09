
import { useRef, useState, useEffect } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './css/main.css'
export default function StickerInfoSlideHeader(props) {
    useEffect(() => {
        console.log(props.StickerSelected);
        console.log(props.stickerId);
    }, []);
    return (
        <div className={`sticker-package-info cursor-p ${props.stickerSelected === props.stickerPackageInfoId ? "sticker-active" : ""}`} onClick={() => { props.setStickerSelected(props.stickerPackageInfoId) }}>
            <img src={props.stickerPackageInfoIcon} alt="" />
            <div className="sticker-package-info-price">
                <p>100</p>
                <span>93.07</span>
            </div>
        </div>
    )
}