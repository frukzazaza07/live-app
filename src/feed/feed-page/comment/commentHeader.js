
import { useRef, useState, useEffect } from "react";
import { GoGift } from 'react-icons/go';
export default function CommentHeader(props) {
    return (
        <div className="gift-reward-footter text-center bg-main">
            <h3 className="text-center">{props.headerTxt}</h3>
        </div>
    )
}