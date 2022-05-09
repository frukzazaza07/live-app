
import { useRef, useState, useEffect } from "react";
import { GoGift } from 'react-icons/go';
export default function giftRewardFootter(props) {
    return (
        <div className="p-3 gift-reward-footter text-end">
            <span className="cursor-p add-gift-wrapper" onClick={() => props.setShowStickerModal(true)}>
                <GoGift />
                <p>Add Gift</p>
            </span>
        </div>
    )
}