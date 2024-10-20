import React from 'react';
import {Link} from "react-router-dom";
import './menu.css'

const Menu = () => {
    return (
        <div>
            <ul className={'ulMenu'}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>


            </ul>
        </div>
    );
};

export default Menu;