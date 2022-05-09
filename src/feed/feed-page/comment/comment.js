
import { useRef, useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap';
import CommentBody from './commentBody';
import './css/main.css'
export default function Comment(props) {
    const commentData = props.commentData;
    // {
    //     topicPostId: 1,
    //     topicPostTitle: "Live สด ถอดหมด",
    //     firstName: "Tassaneewan",
    //     lastName: "Wongwai",
    //     displayName: "Tass jhim",
    //     profileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //     profileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //     topicPostDate: "2022-04-01 23:00:00",
    //     comment: [
    //         {
    //             commentId: 1,
    //             commentById: 1,
    //             commentByFirstname: "Wanutpong",
    //             commentByLastname: "Boonpunya",
    //             commentByDisplayName: "fluk jhim",
    //             commentByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //             commentByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //             commentDetail: "น่ารักจังเลยค๊าฟฟฟ",
    //             commentDate: "2022-04-01 23:00:00",
    //             commentSub: [],
    //         },
    //         {
    //             commentId: 2,
    //             commentById: 3,
    //             commentByFirstname: "คุณพ่อ",
    //             commentByLastname: "วัยใส",
    //             commentByDisplayName: "จริงใจ พร้อมเพย์",
    //             commentByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
    //             commentByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
    //             commentDetail: "รอเปย์นะก๊าฟฟฟฟฟฟฟฟฟฟ",
    //             commentDate: "2022-04-01 23:00:00",
    //             commentSub: [],
    //         }
    //     ]
    // }
    return (
        <div className="comment-container">
            <div className="comment-header">
                <div className="feed-card">
                    <div className="feed-card-header">
                        <div className="card-header-left d-flex align-items-cente p-3">
                            <div className="profile-img">
                                <img src={commentData.profileIcon} alt="" />
                            </div>
                            <div className="comment-profile ps-3">
                                <div className="profile-fullname">
                                    <span>{commentData.firstName} </span>
                                    <span>{commentData.topicPostTitle}</span>
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
                    commentData.comment.map((value, index) => (
                        <CommentBody key={index} commentBody={value} />
                    ))
                }
            </div>
        </div>
    )
}