import { useRef, useState, useEffect } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './css/main.css'
export default function StickerSlideHeader(props) {
    return (
        <div className="sticker-package cursor-p" onClick={() => { props.packageSelected(props.packageId) }}>
            <img src={props.stickerPackageIcon} alt="" />
        </div>
    )
}