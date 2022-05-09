
import { useRef, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import { FiHeart } from 'react-icons/fi';
import Mylib from '../../../my-function/mylib.js'
import './css/main.css'
export default function ReplyBody(props) {
    const [dateCommentShow, setDateCommentShow] = useState("");
    const replyBody = props.replyBody;
    // {
    //     topicPostId: 1,
    //     commentId: 1,
    //     replyId: 1,
    //     replyById: 1,
    //     replyByFirstname: "Porntehp",
    //     replyByLastname: "Ponpoo",
    //     replyByDisplayName: "benz jhim",
    //     replyByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //     replyByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //     replyDetail: "กูเห็นนะไอจิ่ม",
    //     replyToId: 1,
    //     replyToFirstname: "Wanutpong",
    //     replyToLastname: "Boonpunya",
    //     replyToDisplayName: "fluk jhim",
    //     replyToProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //     replyToProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //     replyDate: "2022-04-01 23:00:00",
    // }
    useEffect(() => {
        calDateDiff(replyBody.replyDate);
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
                        <div className="card-header-left d-flex align-items-cente">
                            <div className="profile-img">
                                <img src={replyBody.replyByProfileIcon} alt="" />
                            </div>
                            <div className="profile-name comment-body-profile ps-3">
                                <div className="profile-fullname">
                                    <span>{replyBody.replyByFirstname} </span>
                                    <span>{replyBody.replyDetail}</span>
                                </div>
                                <div className="profile-id">
                                    <span>{dateCommentShow}</span>
                                    <span className="cursor-p"> ตอบกลับ</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-header-right">
                            <div className="comment-icon">
                                <FiHeart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}