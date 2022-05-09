import { useRef, useState, useEffect } from "react";
import ProfileId from "./profileId";
import VoteText from "./voteText";
import ProfileIcon from "./profileIcon";
import Comment from "./comment/comment";
import CommentForm from "./comment/commentForm";
import CommentHeader from "./comment/commentHeader";
import GiftReward from "./gift-reward/giftReward";
import GiftRewardFootter from "./gift-reward/giftRewardFootter";
import GiftRewardHeader from "./gift-reward/giftRewardHeader";
import StickerSlide from "../sticker-gift/stickerSlide";
import ModalScroll from "../../modal/modalScroll";
import ModalScrollFullHeight from "../../modal/modalScrollFullHeight";
import TypeButton from "../type-feed/typeButton";
import { BiLike, BiHide } from 'react-icons/bi';
import { MdLiveTv } from 'react-icons/md';
import { BsFillChatFill, BsTelephoneFill, BsSuitHeart, BsChatDots } from 'react-icons/bs';
import { RiLiveFill } from 'react-icons/ri';
import { FiLock } from 'react-icons/fi';
import { ImGift } from 'react-icons/im';
import { AiOutlineStar } from 'react-icons/ai';
import { GiPaperClip } from 'react-icons/gi';
import ApiService from "../../api-service/apiService";
import {
    useNavigate
} from "react-router-dom";

import './css/main.css'
const apiService = new ApiService();
export default function FeedCard(props) {
    const navigate = useNavigate();
    const [liveData, setLiveData] = useState(props.liveData);
    let [forceRerender, setForceRerender] = useState(0);
    const profileIdSplit = liveData.subId.split("");
    const [showModalScroll, setshowModalScroll] = useState(false);
    const [showStickerModal, setShowStickerModal] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const modalStickerTxt = "STICKER GIFT";
    const memberId = (apiService.memberId !== "" && apiService.memberId !== undefined ? apiService.memberId : "");
    const fakeComment = {
        topicPostId: 1,
        topicPostTitle: "Live สด ถอดหมด",
        firstName: "Tassaneewan",
        lastName: "Wongwai",
        displayName: "Tass jhim",
        profileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
        profileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
        topicPostDate: "2022-04-01 23:00:00",
        comment: [
            {
                commentId: 1,
                commentById: 1,
                commentByFirstname: "Wanutpong",
                commentByLastname: "Boonpunya",
                commentByDisplayName: "fluk jhim",
                commentByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                commentByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                commentDetail: "น่ารักจังเลยค๊าฟฟฟ",
                commentDate: "2022-04-01 23:00:00",
                commentIsLike: true,
                commentSub: [
                    {
                        topicPostId: 1,
                        commentId: 1,
                        replyId: 1,
                        replyById: 1,
                        replyByFirstname: "Porntehp",
                        replyByLastname: "Ponpoo",
                        replyByDisplayName: "benz jhim",
                        replyByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                        replyByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                        replyDetail: "กูเห็นนะไอจิ่ม",
                        replyIsLike: true,
                        replyToId: 1,
                        replyToFirstname: "Wanutpong",
                        replyToLastname: "Boonpunya",
                        replyToDisplayName: "fluk jhim",
                        replyToProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                        replyToProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                        replyDate: "2022-04-01 23:00:00",
                    }
                ],
            },
            {
                commentId: 2,
                commentById: 3,
                commentByFirstname: "คุณพ่อ",
                commentByLastname: "วัยใส",
                commentByDisplayName: "จริงใจ พร้อมเพย์",
                commentByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                commentByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                commentDetail: "รอเปย์นะก๊าฟฟฟฟฟฟฟฟฟฟ",
                commentDate: "2022-04-01 23:00:00",
                commentIsLike: false,
                commentSub: [],
            }
        ]
    };

    const fakeGiftReward = {
        topicPostId: 1,
        topicPostTitle: "Live สด ถอดหมด",
        firstName: "Tassaneewan",
        lastName: "Wongwai",
        displayName: "Tass jhim",
        profileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
        profileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
        topicPostDate: "2022-04-01 23:00:00",
        giftReward: [
            {
                giftRewardId: 1,
                giftRewardById: 1,
                giftRewardType: "sticker",
                giftRewardText: "1",
                valuePrice: 20,
                giftPrice: 18.675,
                currency: "THB",
                giftRewardSvg: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/red.svg",
                giftRewardImage: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/red.svg",
                giftRewardByFirstname: "Wanutpong",
                giftRewardByLastname: "Boonpunya",
                giftRewardByDisplayName: "fluk jhim",
                giftRewardByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                giftRewardByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                giftRewardDetail: "หัวใจ",
                giftRewardDate: "2022-04-01 23:00:00",
            },
            {
                giftRewardId: 2,
                giftRewardById: 3,
                giftRewardType: "sticker",
                giftRewardText: "1",
                valuePrice: 20,
                giftPrice: 18.675,
                currency: "THB",
                giftRewardSvg: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/green.svg",
                giftRewardImage: "https://d1j5kpxxhf5l74.cloudfront.net/sticker/live-animate/thumbnail/green.svg",
                giftRewardByFirstname: "คุณพ่อ",
                giftRewardByLastname: "วัยใส",
                giftRewardByDisplayName: "จริงใจ พร้อมเพย์",
                giftRewardByProfileIcon: "https://static.foxclub.club/14bbecd6-c31d-4b35-a756-6734e8025ca3/658a499a-8614-4a5f-890e-46d6a11604de.jpg?tr=w-100",
                giftRewardByProfileOrgin: "https://static.foxclub.club/feed/2022/4/1/fee6856f-9706-4310-9e83-a3e062b81aad.jpg?tr=w-1200",
                giftRewardDetail: "รอเปย์นะก๊าฟฟฟฟฟฟฟฟฟฟ",
                giftRewardDate: "2022-04-01 23:00:00",
            }
        ]
    };

    const follow = async (liveStreamId) => {
        if (memberId === "") {
            navigate('/login/no');
        }
        const apiService = new ApiService();
        const dataSend = {
            liveStreamId: liveStreamId,
            memberId: apiService.memberId,
        };
        const response = await apiService.follow(dataSend);

        if (response.status === true) {
            props.updateFollower(liveStreamId, "follow");
            setForceRerender(forceRerender += 1);
        }
    };

    const unFollow = async (liveStreamId) => {
        if (memberId === "") {
            navigate('/login/no');
        }
        const apiService = new ApiService();
        const dataSend = {
            liveStreamId: liveStreamId,
            memberId: apiService.memberId,
        };
        const response = await apiService.unFollow(dataSend);

        if (response.status === true) {
            props.updateFollower(liveStreamId, "unFollow");
            setForceRerender(forceRerender += 1);
        }
    };

    // useEffect(() => {
    //     console.log(liveData)
    // }, [])
    return (
        <>
            <ModalScroll
                show={showStickerModal}
                onHide={() => setShowStickerModal(false)}
                modalHeader={modalStickerTxt}
                modalBody={<StickerSlide />}
                modalFootter={<CommentForm />}
            />
            {
                modalHeader.toLowerCase() === "comment"
                    ?
                    <ModalScrollFullHeight
                        show={showModalScroll}
                        onHide={() => setshowModalScroll(false)}
                        modalHeader={<CommentHeader headerTxt={modalHeader} />}
                        modalBody={<Comment commentData={fakeComment} />}
                        modalFootter={<CommentForm />}
                    />
                    :
                    <ModalScrollFullHeight
                        show={showModalScroll}
                        onHide={() => setshowModalScroll(false)}
                        modalHeader={<GiftRewardHeader headerTxt={modalHeader} />}
                        modalBody={<GiftReward giftRewardData={fakeGiftReward} />}
                        modalFootter={<GiftRewardFootter setShowStickerModal={setShowStickerModal} />}
                    />
            }


            <div className="feed-card">
                <div className="feed-card-header">
                    <div className="card-header-left d-flex align-items-center p-3">

                        <div className="profile-img">
                            <img src={liveData.profileIcon} alt="" />
                        </div>
                        <div className="profile-name ps-3">
                            <div className="profile-fullname">
                                <span>{liveData.firstname} </span>
                                <span>{liveData.lastname}</span>
                                <span> ({liveData.displayName})</span>
                            </div>
                            <div className="profile-id">
                                <span>Profile ID. </span>
                                {
                                    profileIdSplit.map((value, index) => (
                                        <span key={index}><ProfileId text={value} /></span>
                                    ))
                                }
                                {/* <span>{liveData.subId}</span> */}
                            </div>
                        </div>

                    </div>
                    <div className="card-header-right"></div>

                </div>
                <div className="feed-card-body">
                    <div className="text-start font-color-main">
                        {liveData.caption}
                    </div>
                    <div>
                        <img src={liveData.postImage} alt="" />
                    </div>
                </div>
                <div className="feed-card-footter">
                    <div className="profile-detail-header">
                        <div className="detail-left">
                            <ProfileIcon className="like-animation" children={<BiLike />} />
                            <ProfileIcon children={<MdLiveTv />} />
                            <ProfileIcon children={<BsFillChatFill />} />
                            <ProfileIcon children={<BsTelephoneFill />} />
                            <ProfileIcon children={<RiLiveFill />} />
                            <div className="icon-lock-heart">
                                <ProfileIcon children={<FiLock />} />
                                <ProfileIcon children={<BsSuitHeart />} />
                            </div>
                        </div>
                        <div className="detail-right">
                            <ProfileIcon children={<ImGift />} />
                        </div>
                    </div>
                    <div className="profile-detail-body">
                        <div className="detail-vote-left">
                            <VoteText className="text-start fw-bold" textLabel="POST VOTES : " textValue={liveData.postVotes} />
                            <VoteText className="text-start" textLabel="TODAY VOTES : " textValue={liveData.todayVotes} />
                            <VoteText className="text-start" textLabel="MONTH VOTES : " textValue={liveData.monthVotes} />
                            <VoteText className="text-start" textLabel="YEAR VOTES : " textValue={liveData.yearVotes} />
                        </div>
                        <div className="detail-vote-right">
                            <VoteText className="text-end fw-bold" textLabel={liveData.allPostView} textValue=" : All Post Views" />
                            <VoteText className="text-end" textLabel={liveData.memberView} textValue=" : Member Views" />
                            <VoteText className="text-end" textValue="GIFTS & VOTES 0 Coins" />
                            <VoteText className="text-end" textValue={liveData.postCreated} />
                        </div>
                    </div>
                    <div className="profile-detail-footter mt-3">
                        <div className="detail-wrapper d-flex justify-content-center gap-1">
                            {
                                memberId !== liveData.createPostBy
                                    ?
                                    liveData.isFollow !== null && liveData.isFollow > 0
                                        ?
                                        <TypeButton onFollower={unFollow} createPostBy={liveData.createPostBy} className="btn-primary gap-1" textRight="UN FOLLOW" currentValue="feedTypeImage" children={<AiOutlineStar />} />
                                        :
                                        <TypeButton onFollower={follow} createPostBy={liveData.createPostBy} className="btn-primary gap-1" textRight="FOLLOW" currentValue="feedTypeImage" children={<AiOutlineStar />} />
                                    : <></>
                            }
                            <TypeButton className="border gap-1" textRight="HIDE" currentValue="feedTypeImage" children={<BiHide />} />
                            <TypeButton className="border gap-1" textRight="COMMENT" currentValue="feedTypeImage" children={<BsChatDots />} />
                            <TypeButton className="border gap-1" textRight="SHARE" currentValue="feedTypeImage" children={<GiPaperClip />} />
                        </div>
                        <div className="detail-wrapper mt-3 h6">
                            <span>{liveData.firstName} </span>
                            <span>{liveData.title}</span>
                        </div>
                        <div className="detail-wrapper d-flex justify-content-between mt-3">
                            <div className="comment-wrapper">
                                <p className="cursor-p comment-list" onClick={() => { setshowModalScroll(true); setModalHeader("Comment"); }}>ดูความคิดเห็นทั้งหมด 1 รายการ</p>
                            </div>
                            <div className="vote-gift-wrapper">
                                <p className="cursor-p gift-vote-list" onClick={() => { setshowModalScroll(true); setModalHeader("Gifts & Votes"); }}>ดู Gift & Votes 1 รายการ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}