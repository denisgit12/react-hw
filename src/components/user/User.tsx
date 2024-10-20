import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

import './styleUser.css'

export type UserProps = {
    user: IUser
}

const User: FC<UserProps> = ({user}) => {
    const {id, address:{city, street}, email, phone} = user;
    return (
        <div className={'headBoxUser'}>
            <h1>{id}</h1>
            <h2>{city}</h2>
            <h2>{street}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
        </div>
    );
};

export default User;