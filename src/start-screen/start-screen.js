import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import './start-screen.sass';

let StartScreen = (props) => {
    function clickOnMe() {
    }

    useEffect(() => {
        clickOnMe();
    })

    return (
        <div className="start">
            <Link to={{ pathname: "/game"}} state={true} className="elegantshadow">Click on me</Link>
        </div>
    );
};

export default StartScreen;