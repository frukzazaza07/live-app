import React, { useState, useRef, useCallback, useEffect } from 'react'
import useInfiniteLoad from './useInfiniteLoad'
import FeedCard from "../feed/feed-page/feedCard"
export default function LoadMore(props) {
    const [pageNumber, setPageNumber] = useState(1)
    const pageSize = 10;
    const {
        data,
        hasMore,
        loading,
        error
    } = useInfiniteLoad(pageNumber, props.apiType, (props.postId !== undefined ? props.postId : ""));
    const [dataState, setDataState] = useState(data);

    const observer = useRef()
    const lastDataElementRef = useCallback(node => {
        if (props.apiType !== "feedPage") return;
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    const updateFollower = (liveStreamId, statusFollow) => {
        // console.log(liveStreamId);
        // console.log(statusFollow);
        const newFollowerLiveData = dataState;
        for (let i = 0; i < newFollowerLiveData.length; i++) {
            // console.log(newFollowerLiveData[i].createPostBy)
            if (newFollowerLiveData[i].createPostBy === liveStreamId && statusFollow === "follow") {
                newFollowerLiveData[i].isFollow = 1;
            } else {
                newFollowerLiveData[i].isFollow = null;
            }
        }
        setDataState(newFollowerLiveData);
    }

    useEffect(() => {
        setDataState(data)
    })

    return (
        <>
            {dataState.map((value, index) => {
                if (dataState.length === index + 1) {
                    return <div ref={lastDataElementRef} key={index}><FeedCard liveData={value} updateFollower={updateFollower} /></div>
                } else {
                    return <div key={index}><FeedCard liveData={value} updateFollower={updateFollower} /></div>
                }
            })}
            <div>{loading && 'Loading...'}</div>
            <div>{error && 'Error'}</div>
        </>
    )
}