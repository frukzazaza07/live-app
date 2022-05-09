// import { useRef, useState, useEffect, useContext } from "react";
import './css/main.css'
export default function Content(props) {
    const mainStyle = { height: props.height, overflowY: "scroll", overflowX: "hidden" };

    return (
        <div className="content-main-container" style={mainStyle}>
            {props.children}
        </div>
    )
}