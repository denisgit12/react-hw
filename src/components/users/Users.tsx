import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../../models/IUser/IUser";
import {userService} from "../../services/apiService";
import User from "../user/User";
import '../user/user.css'

type UsersProps = {
    lift:(id:number) => void;
}

const Users:FC<UsersProps> = ({lift}) => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

        const getUsers = async () => {
         setUsers( await userService.getUsers());
        }
        getUsers();
    }, [])
    return (
        <div className={'headBox'}>
            {users.map(value => <User lift={lift} key={value.id} user={value}/>)}
        </div>
    );
};

export default Users;