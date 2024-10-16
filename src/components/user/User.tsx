import React, {FC} from 'react';
import {IUser} from "../../models/IUser/IUser";

import './user.css';

type UserProps = {
    user: IUser;
    lift:(id:number)=>void;
}

const User: FC<UserProps> = ({user, lift}) => {
    const {id, firstName, lastName, address: {city, address}} = user;

    const fetchPost = () => {
        lift(id);
    }
    return (
        <div className={'boxUser'}  >
            <div className={'user'}>
                <h1>{id}</h1>
                <h2>{firstName}</h2>
                <h2>{lastName}</h2>
                <p>{city}</p>
                <p>{address}</p>

            </div>
            <button onClick={event => fetchPost() }>fetch post</button>
        </div>
    );
};

export default User;