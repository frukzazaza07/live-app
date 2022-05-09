import { useRef, useState, useEffect, } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import FeedCard from "./feedCard"
import MyLib from "../../my-function/mylib";
import LoadMore from "../../lib/loadMore";
import ApiService from "../../api-service/apiService";

const myLib = new MyLib();
export default function FeedPage(props) {
    const apiService = new ApiService();
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [dailyPostData, setDailyPostData] = useState([]);

    const loadDailyPost = async () => {
        const dailyPostResponse = await apiService.fetchLoadDailyPost(currentPage, pageSize);
        if (dailyPostResponse.status === true) {
            if (currentPage === 1) {
                setDailyPostData(dailyPostResponse.data);
            } else {
                let fake = dailyPostData;
                for (let i = 0; i < dailyPostResponse.data.length; i++) {
                    fake.push(dailyPostResponse.data[i]);
                }
                setDailyPostData(fake);
                console.log(fake)
            }

            setCurrentPage(currentPage + 1);
        } else {

        }

    };

    return (
        <div className="feed-page" id="scrollableDiv">
            <LoadMore apiType="feedPage" />
        </div>
    )
}