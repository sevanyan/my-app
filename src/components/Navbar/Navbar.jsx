import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


// let s  = {
//     'nav': 'Navbar_nav__3VT01',
//     'item': 'Navbar_item__1Raqz'
// }
// let c1= "item";
// let c2 = "active";
//
// let classesNew = `${s.item} ${s.active}`;
//


const Navbar = (props) => {


    return (<nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messeges</a>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
            </div>
        </nav>
    );
}
export default Navbar;