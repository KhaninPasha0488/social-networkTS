import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";
const classLink = ({isActive}: any) => isActive ? s.item_link:s.item;

const Nav = () => {
    return (

        <nav className={s.nav}>
            <div >
            <div className={s.item}>
                <NavLink to={"/profile"} className={classLink} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/messages"} className={classLink} >Messages</NavLink>
            </div>
                <div className={s.item}>
                    <NavLink to={"/news"} className={classLink} >News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/music"} className={classLink} >Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={"/settings"} className={classLink} >Settings</NavLink>
                </div>

        </div>
        </nav>

    );
};

export default Nav;