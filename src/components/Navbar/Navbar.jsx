import React from 'react';
import s from './Navbar.module.css';

// let s  = {
//     'nav': 'Navbar_nav__3VT01',
//     'item': 'Navbar_item__1Raqz'
// }
// let c1= "item";
// let c2 = "active";
//
// let classesNew = `${s.item} ${s.active}`;
//


const Navbar=() =>{
    return( <nav className ={s.nav}>
            <div className={s.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a>Messeges</a>
            </div>
            <div className={s.item}>
                <a href= '/news'>News</a>
            </div>
            <div className={s.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={s.item}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar ;