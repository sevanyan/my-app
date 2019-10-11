import React from 'react';
import './Profile.css';

const Navbar = () => {
    return(
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messeges</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
    );
}
export default Navbar ;