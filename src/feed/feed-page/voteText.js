import { useRef, useState, useEffect, } from "react";
export default function VoteText(props) {
    return (
        <div className={props.className}>
            <span>{props.textLabel}</span>
            <span>{props.textValue}</span>
        </div>
    )
}