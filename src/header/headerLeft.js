
import { AiOutlineLock } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { BsPencil } from 'react-icons/bs';
import StreamerLogin from './user-login/streamerLogin';
import {
    Link,
    useNavigate
} from "react-router-dom";
export default function HeaderLeft(props) {
    const [memberStatus, setMemberStatus] = useState("");
    useEffect(() => {
        if (props.userData !== undefined && props.userData() !== null) {
            setMemberStatus(props.userData().member_status);
        }

    }, [])
    const navigate = useNavigate();
    return (
        <div className="header-left d-flex justify-content-between gap-4">
            {
                props.userData !== undefined && props.userData() !== null
                    ?
                    <>
                        <button className="btn btn-logout" onClick={() => { props.logout(); navigate("/login/no"); window.location.reload(); }}>logout</button>
                        {
                            memberStatus === "live_stream"
                                ? <StreamerLogin />
                                : <></>
                        }
                        {
                            memberStatus === "member"
                                ? <></>
                                : <></>
                        }
                    </>
                    :
                    <>
                        <div className="header-icon header-icon-left"><Link to="/login/no"><AiOutlineLock /></Link></div>
                        <div className="header-icon header-icon-left"><Link to="/profile"><BsPencil /></Link></div>
                    </>
            }

        </div>
    )
}