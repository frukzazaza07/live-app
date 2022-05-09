import { useRef, useState, useEffect, } from "react";
import { Button } from 'react-bootstrap';
import HeaderLeft from './headerLeft';
import HeaderCenter from './headerCenter';
import HeaderRight from './headerRight';
import { useTranslation } from "react-i18next";
import Search from './search';
import "./css/main.css";
export default function Header(props) {
    const headerHeightRef = useRef(null);
    const { t } = useTranslation();
    useEffect(() => {
        props.setHeaderHeight({ height: headerHeightRef.current.offsetHeight });
    }, [])
    return (
        <div ref={headerHeightRef} className="header-container bg-main" style={props.style}>
            <div className="header-wrapper">
                <HeaderLeft userData={props.userData} logout={props.logout} />
                <HeaderCenter />
                <HeaderRight userData={props.userData} newAlert={props.newAlert} />
            </div>
            <Search />
        </div>
    )
}