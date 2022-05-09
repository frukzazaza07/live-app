
import { useRef, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import Mylib from '../../../my-function/mylib.js'
import './css/main.css'
export default function GiftRewardBody(props) {
    const [dateCommentShow, setDateCommentShow] = useState("");
    const giftRewardBodyData = props.giftRewardBody;
    // {
    // giftRewardId: 1,
    // giftRewardById: 1,
    // giftRewardType: "sticker",
    // giftRewardText: "1",
    // giftRewardSvg: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/red.svg",
    // giftRewardImage: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/red.svg",
    // giftRewardByFirstname: "Wanutpong",
    // giftRewardByLastname: "Boonpunya",
    // giftRewardByDisplayName: "fluk jhim",
    // giftRewardByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    // giftRewardByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    // giftRewardDetail: "หัวใจ",
    // giftRewardDate
    useEffect(() => {
        calDateDiff(giftRewardBodyData.giftRewardDate);
    }, [])
    function calDateDiff(startDate) {
        const mylib = new Mylib();
        const currentDate = mylib.createDate();
        const dateDiff = mylib.calculateDays(startDate, currentDate.fullFormat);
        // console.log(dateDiff);
        let returnData = "";
        if (dateDiff.years > 0) {
            returnData = dateDiff.years + " ปีที่แล้ว"
        }
        else if (dateDiff.months > 0) {
            returnData = dateDiff.months + " เดือนที่แล้ว"
        }
        else if (dateDiff.days > 0) {
            returnData = dateDiff.days + " วันที่แล้ว"
        }
        else if (dateDiff.hours > 0) {
            returnData = dateDiff.hours + " ชั่วโมงที่แล้ว"
        }
        else if (dateDiff.minutes > 0) {
            returnData = dateDiff.minutes + " นาทีที่แล้ว"
        }
        else if (dateDiff.seconds > 0) {
            returnData = dateDiff.seconds + " วินาทีที่แล้ว"
        }
        setDateCommentShow(returnData);
        return;

    }
    return (
        <div className="comment-container">
            <div className="comment-post-header">
                <div className="feed-card">
                    <div className="feed-card-header">
                        <div className="card-header-left d-flex align-items-center p-3">
                            <div className="profile-img">
                                <img src={giftRewardBodyData.giftRewardSvg} alt="" />
                            </div>
                            <div className="profile-name ps-3">
                                <div className="profile-fullname reward-price">
                                    <span>{giftRewardBodyData.valuePrice} </span>
                                    <span>{giftRewardBodyData.currency}</span>
                                </div>
                                <div className="profile-id gift-price">
                                    <span>({giftRewardBodyData.giftPrice})</span>
                                    {/* <span>{dateCommentShow}</span> */}
                                </div>
                            </div>
                        </div>
                        <div className="card-header-right gift-reward-right">
                            <div className="comment-profile reward-profile ps-3">
                                <div className="profile-fullname">
                                    <span>{giftRewardBodyData.giftRewardByFirstname} </span>
                                    <span>{giftRewardBodyData.giftRewardByLastname}</span>
                                </div>
                                <div className="reward-send-time">
                                    <span>{dateCommentShow}</span>
                                </div>
                            </div>
                            <div className="profile-img">
                                <img src={giftRewardBodyData.giftRewardByProfileIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}