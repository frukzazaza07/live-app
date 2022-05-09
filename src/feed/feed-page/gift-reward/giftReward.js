import { useRef, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import GiftRewardBody from './giftRewardBody'
import Mylib from '../../../my-function/mylib.js'
import './css/main.css'
export default function GiftReward(props) {
    const [dateCommentShow, setDateCommentShow] = useState("");
    const giftRewardData = props.giftRewardData;
    // {
    //             commentId: 1,
    //             Id: 1,
    //             Firstname: "Wanutpong",
    //             Lastname: "Boonpunya",
    //             DisplayName: "fluk jhim",
    //             ProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //             ProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //             commentDetail: "น่ารักจังเลยค๊าฟฟฟ",
    //             commentDate: "2022-04-01 23:00:00",
    //             commentSub: [],
    //         },
    useEffect(() => {
        calDateDiff(giftRewardData.commentDate);
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
            <div className="comment-header">
                <div className="feed-card">
                    <div className="feed-card-header">
                        <div className="card-header-left d-flex align-items-center p-3">
                            <div className="profile-img">
                                <img src={giftRewardData.profileIcon} alt="" />
                            </div>
                            <div className="comment-profile ps-3">
                                <div className="profile-fullname">
                                    <span>{giftRewardData.firstName} </span>
                                    <span>{giftRewardData.topicPostTitle}</span>
                                </div>
                                <div className="profile-id">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-body mt-2">
                {
                    giftRewardData.giftReward.map((value, index) => (
                        <GiftRewardBody key={index} giftRewardBody={value} />
                    ))
                }
            </div>
        </div>
    )
}