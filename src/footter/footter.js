import { useRef, useState, useEffect, } from "react";
import FootterIcon from './footterIcon';
import { MdOutlineRssFeed } from 'react-icons/md';
import { BsSearch, BsStar } from 'react-icons/bs';
import { GrLineChart } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./css/main.css";
export default function Footter(props) {
    const linkStyle = { textDecoration: 'none', color: "black" };
    const footterHeightRef = useRef(null);
    const { t } = useTranslation();
    useEffect(() => {
        props.setFootterHeight({ height: footterHeightRef.current.offsetHeight });
    }, [])

    return (
        <div ref={footterHeightRef} className="footter-container bg-main" style={props.style}>
            <div className="footter-wrapper d-flex justify-content-between ">
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuFooter")} Icon={<GiHamburgerMenu />} /></Link>
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuFeed")} Icon={<MdOutlineRssFeed />} /></Link>
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuBrowse")} Icon={<BsSearch />} /></Link>
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuFollow")} Icon={<BsStar />} /></Link>
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuTop100")} Icon={<GrLineChart />} /></Link>
                <Link style={linkStyle} to="/home"><FootterIcon text={t("footterMenuProfile")} Icon={<CgProfile />} /></Link>
            </div>
        </div>
    )
}