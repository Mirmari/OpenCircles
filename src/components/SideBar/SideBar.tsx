import React, { useState } from "react";

import './SideBar.css';

const SideBar = () => {
    const [active, setActive] = useState(false);

    const onClick = () => {
        setActive(!active);
    };

    return (
        <div className="side-bar">

            <div className="side-bar__item"
                onClick={onClick}
            >
                {active && <div className="side-bar--active"/>}
                <div className="item__icon icon--user_list"/>
                <a className="item__text" href="#UserLis" >User list</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--daily"/>
                <a className="item__text" href="#Daily" >Daily</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--brainstorm"/>
                <a className="item__text" href="#Brainstorm" >Brainstorm</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--course"/>
                <a className="item__text" href="#Course" >Course</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--leveling"/>
                <a className="item__text" href="#Leveling" >Leveling system</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--live_streams"/>
                <a className="item__text" href="#Live" >Live streams</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--advanced"/>
                <a className="item__text" href="#Advanced" >Advanced</a>
            </div>
            <div className="side-bar__item">
                <div className="item__icon icon--video_analytics"/>
                <a className="item__text" href="#Video" >Video analytics</a>
            </div>
        </div>
    );
};

export default SideBar;