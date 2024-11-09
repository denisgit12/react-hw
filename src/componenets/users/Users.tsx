import React, {useEffect} from 'react';
import {axiosInstance} from "../../axiosInstance/axiosInstance";
import {IUser} from "../../models/IUser";
import {useStore} from "../../storeZustand/storeZustand";

const Users = () => {
    let {userSlice:{loadUsers, allUsers}} = useStore();

    useEffect(() => {
        axiosInstance.get<IUser[]>('/users').then(value => loadUsers(value.data) )
    },[loadUsers]);
    console.log(allUsers);
    return (
        <div>
            {allUsers.map( value => <div key={value.id}>
                <h2>
                    {value.id}
                </h2>
                <h2>
                    {value.name }
                </h2>

            </div>)}
        </div>
    );
};

export default Users;