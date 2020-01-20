import React from 'react';
import { Link } from 'react-router-dom';
import './start.scss';


const Start = () => {
    let logoImg = require('../../view/img/star-wars-logo.png');
    
    return (
        <div className="start">
            <img className="start__logo" src={logoImg} alt="logo" />
            <Link className="start__play" to="/game">START</Link>
        </div>
    )
}


export default Start;