import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import {
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import ApiService from '../api-service/apiService';
import ModalError from '../modal/modalError';
import { getPermissions } from './getPermissions';
import Peer from "simple-peer"
import axios from 'axios';
import { CopyToClipboard } from "react-copy-to-clipboard"
import Pusher from "pusher-js"
import './css/main.css';
// var Peer = require('simple-peer');
const apiService = new ApiService();
export default function LiveSteam() {
    const videoCallerRef = useRef(null);
    const videoAnswerRef = useRef(null);
    const [me, setMe] = useState("")
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    var pusher = new Pusher('6b85e81ce0ae7b74d1dd', {
        encrypted: true,
        cluster: 'ap1'
    });
    useEffect(() => {
        getPermissions().then((permissions) => {
            // videoCallerRef.current.srcObject = permissions;
            // streamingTestPost(permissions);
            // console.log("get allow")
            setStream(permissions);
            videoCallerRef.current.srcObject = stream
        });


        var channel2 = pusher.subscribe('streaming-test');
        channel2.bind('App\\Events\\StreamOffer', function (serverData) {

            const data = serverData.data.offer;
            console.log("StreamOffer");
            console.log(data);
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signalData);
            // answerCall(data.signalData);
        });



    }, [])

    // const callUser = (id) => {

    //     const peer = new Peer({
    //         initiator: true,
    //         trickle: false,
    //         stream: stream
    //     })
    //     peer.on("signal", (data) => {

    //         // socket.emit("callUser", {
    //         //     userToCall: id,
    //         //     signalData: data,
    //         //     from: me,
    //         //     name: name
    //         // })
    //         streamingTestPost(
    //             {
    //                 signalData: data,
    //                 from: "flukCall",
    //                 name: "flukAnswer"
    //             }
    //         );
    //     })
    //     peer.on("stream", (stream) => {
    //         console.log(stream)
    //         videoCallerRef.current.srcObject = stream;
    //         // userVideo.current.srcObject = stream

    //     })
    //     var channel3 = pusher.subscribe('streaming-answer');
    //     channel3.bind('App\\Events\\StreamAnswer', function (serverData) {
    //         console.log("channel3")

    //         const data = serverData.data.answer;
    //         console.log(data.signalData);
    //         peer.signal(data.signalData)
    //     });

    //     // socket.on("callAccepted", (signal) => {
    //     //     setCallAccepted(true)
    //     //     peer.signal(signal)
    //     // })

    //     connectionRef.current = peer
    // }

    // const answerCall = () => {
    //     // setCallAccepted(true)
    //     const peer = new Peer({
    //         initiator: false,
    //         trickle: false,
    //         stream: stream
    //     })
    //     peer.on("signal", (data) => {
    //         console.log("answerCall signal")
    //         console.log(data)
    //         answerAccept(
    //             {
    //                 signalData: data,
    //                 to: "flukCall",
    //                 // name: "flukAnswer"
    //             });
    //         // socket.emit("answerCall", { signal: data, to: caller })
    //     })
    //     peer.on("stream", (stream) => {
    //         console.log(stream);
    //         // userVideo.current.srcObject = stream
    //         videoAnswerRef.current.srcObject = stream;
    //     })
    //     console.log(callerSignal);
    //     peer.signal(callerSignal)
    //     connectionRef.current = peer
    // }

    function streamingTest(streamData) {
        const ggg = {
            method: "get",
            url: "http://wave-sport.com/live-app/api/streaming-test",
            headers: {},
            data: { streamData: streamData },
        };
        return new Promise((resolve, reject) => {
            axios(ggg)
                .then((response) => {

                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })

    }

    function streamingTestPost(streamData) {
        const ggg = {
            method: "post",
            url: "http://wave-sport.com/live-app/api/stream-offer",
            headers: {},
            data: {
                broadcaster: "broadcaster",
                receiver: "123",
                offer: streamData,
            },
        };
        return new Promise((resolve, reject) => {
            axios(ggg)
                .then((response) => {

                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })

    }
    function answerAccept(streamData) {
        console.log("answerAccept");
        console.log(streamData);
        const ggg = {
            method: "post",
            url: "http://wave-sport.com/live-app/api/stream-answer",
            headers: {},
            data: {
                broadcaster: "broadcaster",
                receiver: "123",
                answer: streamData,
            },
        };
        return new Promise((resolve, reject) => {
            axios(ggg)
                .then((response) => {

                    // console.log(response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error)
                    reject(error);
                });
        })

    }



    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream,
        })
        console.log("calluser")
        console.log(peer)
        peer.on("signal", (data) => {
            console.log(data);
            // socket.emit("callUser", {
            //     userToCall: id,
            //     signalData: data,
            //     from: me,
            //     name: name
            // })
            streamingTestPost(
                {
                    userToCall: "123",
                    signalData: data,
                    from: "flukCall",
                    name: "flukAnswer"
                }
            );
        })
        peer.on("stream", (stream) => {

            videoCallerRef.current.srcObject = stream

        })
        // socket.on("callAccepted", (signal) => {
        //     setCallAccepted(true)
        //     console.log("caller");
        //     console.log(signal);
        //     peer.signal(signal)
        // })

        var channel3 = pusher.subscribe('streaming-answer');
        channel3.bind('App\\Events\\StreamAnswer', function (serverData) {
            console.log("channel3")

            const data = serverData.data.answer;
            console.log(data.signalData);
            peer.signal(data.signalData)
        });

        connectionRef.current = peer
    }

    const answerCall = () => {
        setCallAccepted(true)
        const peer2 = new Peer(
            {
                initiator: false,
                trickle: false,
                stream: stream,
            }
        )
        console.log(peer2);

        peer2.on("signal", (data) => {
            console.log("signal answer");
            // socket.emit("answerCall", { signal: data, to: caller })
            answerAccept(
                {
                    signalData: data,
                    to: "flukCall",
                });
        })
        peer2.on("stream", (stream) => {
            console.log("stream answer");
            videoAnswerRef.current.srcObject = stream
        })

        console.log("answer");
        console.log(callerSignal);
        peer2.signal(callerSignal)
        connectionRef.current = peer2
    }

    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
    }

    return (
        <>
            <h1 style={{ textAlign: "center", color: '#fff' }}>Zoomish</h1>
            <div className="container">
                <div className="video-container">
                    <div className="video">
                        <video playsInline muted ref={videoCallerRef} autoPlay style={{ width: "300px" }} />
                    </div>
                    <div className="video">
                        {callAccepted && !callEnded ?
                            <video playsInline ref={videoAnswerRef} autoPlay style={{ width: "300px" }} /> :
                            null}
                    </div>
                </div>
                <div className="myId">
                    <input type="text"
                        id="filled-basic"
                        label="Name"
                        variant="filled"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginBottom: "20px" }}
                    />
                    {/* <CopyToClipboard text={me} style={{ marginBottom: "2rem" }}>
                        <button>Copy ID</button>
                    </CopyToClipboard> */}

                    <input type="text"
                        id="filled-basic"
                        label="ID to call"
                        variant="filled"
                        value={idToCall}
                        onChange={(e) => setIdToCall(e.target.value)}
                    />
                    <div className="call-button">
                        {callAccepted && !callEnded ? (
                            // <Button variant="contained" color="secondary" onClick={leaveCall}>
                            //     End Call
                            // </Button>
                            <button onClick={leaveCall}>End Call</button>
                        ) : (
                            // <IconButton color="primary" aria-label="call" onClick={() => callUser(idToCall)}>
                            //     <PhoneIcon fontSize="large" />
                            // </IconButton>
                            <button onClick={() => callUser(idToCall)}>call user</button>
                        )}
                        {idToCall}
                    </div>
                </div>
                <div>
                    {receivingCall && !callAccepted ? (
                        <div className="caller">
                            <h1 >{name} is calling...</h1>
                            {/* <Button variant="contained" color="primary" onClick={answerCall}>
                                Answer
                            </Button> */}

                            <button onClick={answerCall}>Answer</button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    );
}