// import { useRef, useState, useEffect, useContext } from "react";
import TypeFeed from "./type-feed/typeFeed";
import FeedPage from "./feed-page/feedPage";
import './css/main.css'
export default function Feed(props) {
    // const mainStyle = { height: props.height, overflowY: "scroll", overflowX: "hidden" };

    return (
        // style={mainStyle}
        <div className="feed-container" >
            <TypeFeed />
            <FeedPage />
        </div>
    )
}