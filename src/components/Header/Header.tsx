import React from 'react';
import {Link} from "react-router-dom";

import './styleHeader.css'

const Header = () => {

    return (
        <div className={'headBoxHeader'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/products'}>Products</Link></li>

            </ul>
        </div>
    );
};

export default Header;