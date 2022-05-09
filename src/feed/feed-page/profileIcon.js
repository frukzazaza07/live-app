import { useRef, useState, useEffect, } from "react";
export default function ProfileIcon(props) {
    return (
        <div className={`icon-click${props.className !== undefined ? " " + props.className : ""}`}>
            {props.children}
        </div >
    )
}