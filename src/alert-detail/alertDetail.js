import { useRef, useState, useEffect, } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedCard from "../feed/feed-page/feedCard"
import MyLib from "../my-function/mylib";
import LoadMore from "../lib/loadMore";
import ApiService from "../api-service/apiService";
import {
    useParams
} from "react-router-dom";

const myLib = new MyLib();
export default function AlertDetail(props) {
    const apiService = new ApiService();
    const [dailyPostData, setDailyPostData] = useState([]);
    let { postId } = useParams();

    useEffect(() => {
        // fetchLoadPostByPostId(postId);
    }, [postId])

    // const fetchLoadPostByPostId = async (postId) => {
    //     const dailyPostResponse = await apiService.fetchLoadPostByPostId(postId);
    //     // console.log(dailyPostResponse);
    //     if (dailyPostResponse.status === false) {
    //         console.log(dailyPostResponse)
    //         return
    //     }
    //     // if (typeof dailyPostResponse.data === "object") {
    //     //     setDailyPostData([dailyPostResponse.data]);
    //     //     return
    //     // }

    //     setDailyPostData(dailyPostResponse.data);
    // };

    return (
        <div className="feed-page" id="scrollableDiv">
            <LoadMore apiType="alertDetail" postId={postId} />
            {/* {dailyPostData.map((value, index) => {
                return <div key={index}><FeedCard liveData={value}  /></div>
            })} */}
        </div>
    )
}