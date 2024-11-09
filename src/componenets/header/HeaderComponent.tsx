import React from 'react';
import {Link} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/users'}>Users</Link>
                </li>
                <li>
                    <Link to={'/comments'}>Comments</Link>
                </li>
                <li>
                    <Link to={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link to={'/total'}>Total</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;