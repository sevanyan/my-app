import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return <header className= {s.header}>
                <img src='http://iguansystems.com/image/logo/Iguan6-01.png' alt='iguan_logo'/>

    <div className={s.loginBlock}>

        <NavLink to={'/login'} >Login</NavLink>

    </div>
    </header>
}
export default Header;