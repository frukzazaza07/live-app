import { useRef, useState, useEffect, } from "react";

export default function FootterIcon({ text, Icon }) {
    // useEffect({

    // }, [])
    // "footterMenuFooter": "เมนู",
    // "footterMenuFeed": "หน้าหลัก",
    // "footterMenuBrowse": "เรียกดู",
    // "footterMenuFollow": "การติดตาม",
    // "footterMenuTop100": "ท็อป100",
    // "footterMenuProfile": "ข้อมูลส่วนตัว"
    return (
        <div className="footter-icon text-center">
            {Icon}
            <p>{text}</p>
        </div>
    )
}