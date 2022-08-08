import React, {useEffect, useState} from 'react';
import AdbIcon from "@mui/icons-material/Adb";
import {Link, useLocation} from "react-router-dom";

import './header.sass';

const Header = (props) => {
    const location = useLocation();

    console.log('location', location)
    const [start, setStart] = useState(false);

    function changeBtn() {
        props.updateData(start);
        start ? setStart(false) : setStart(true)
    }

    useEffect(() => {
        if (location.state !== null) {
            setStart(location.state);
        }
        if (location.pathname !== '/game') {
            setStart(false)
        }
    }, [start, location])

    return (
        <div className="header">
            <div className="header__first">
                <div className="header__first__name">
                    <AdbIcon className="logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link to="/" className="name">CATS</Link>
                </div>
                <div className="header__first__tabs">
                    <Link to="/game" onClick={() => changeBtn()} className="tabs-buttons">
                        {start ? 'STOP' : 'START'}
                    </Link>
                    <Link to="/leaderboard" className="tabs-buttons">LEADERBOARD</Link>
                    <Link to="/about" className="tabs-buttons">ABOUT</Link>
                </div>
            </div>
            <div className="header__second">
                <div className="header__second__avatar">
                    <span>A</span>
                </div>
            </div>
        </div>
    );
};

export default Header;