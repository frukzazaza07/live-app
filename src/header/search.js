import { useRef, useState, useEffect, useCallback, createRef, Component } from "react";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Search() {
    const iconSearch = useRef(null);
    const inputSearch = useRef(null);
    const [iconHeight, setIconHeight] = useState({ height: "" });
    useEffect(() => {
        setIconHeight({ height: inputSearch.current.offsetHeight });
    }, [])
    return (
        <div className="header-search mt-4">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span ref={iconSearch} className="input-group-text" id="inputGroup-sizing-default" style={iconHeight}><AiOutlineSearch /> </span>
                </div>
                <input ref={inputSearch} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </div>
        </div>
    )
}