import React, {useEffect, useState} from 'react';
import User from "../user/User";
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/userService/userService";

import '../user/styleUser.css'

const Users = () => {

    const [users,setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value));
    },[])

    return (
        <div className={'headBoxUsers'}>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;