import { useEffect, useState } from 'react'
import axios from 'axios'
import ApiService from "../api-service/apiService";

export default function useInfiniteLoad(pageNumber, apiType, postId) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const pageSize = 10;
    useEffect(() => {
        setData([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)
        // let cancel
        loadDailyPost();

        async function loadDailyPost() {
            const apiService = new ApiService();
            let res;
            if (apiType === "feedPage") {
                res = await apiService.fetchLoadDailyPost(pageNumber, pageSize);
            } else {
                res = await apiService.fetchLoadPostByPostId(postId);
            }

            setData(prevData => {
                return [...new Set([...prevData, ...res.data.map(value => value)])]
            })
            setHasMore(res.data.length > 0)
            setLoading(false)
        }

        // axios({
        //     method: 'GET',
        //     url: url,
        //     cancelToken: new axios.CancelToken(c => cancel = c)
        // }).then(res => {
        //     setData(prevData => {
        //         return [...new Set([...prevData, ...res.data.data.map(value => value)])]
        //     })
        //     setHasMore(res.data.data.length > 0)
        //     setLoading(false)
        // }).catch(e => {
        //     if (axios.isCancel(e)) return
        //     setError(true)
        // })
        // return () => cancel()
    }, [pageNumber])

    return { loading, error, data, hasMore }
}
