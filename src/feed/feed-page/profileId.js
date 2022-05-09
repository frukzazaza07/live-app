import { useRef, useState, useEffect, } from "react";
export default function ProfileId(props) {
    useEffect(() => {
    }, [])
    return (
        <span className="profile-id-text">
            {props.text}
        </span>
    )
}