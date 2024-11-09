import React, {useEffect} from 'react';

import {useStore} from "../../storeZustand/storeZustand";
import {axiosInstance} from "../../axiosInstance/axiosInstance";
import {IPost} from "../../models/IPost";

const Posts = () => {

    let {postSlice: {loadPosts, allPosts}} = useStore();

    useEffect(() => {
        axiosInstance.get<IPost[]>('/posts').then(value => loadPosts(value.data))
    }, [allPosts, loadPosts])
    return (
        <div>
            {allPosts.map(value =>
                <div key={value.id}>
                    <h2>{value.id}</h2>
                    <h2>{value.body}</h2>

                </div>)}
        </div>
    );
};

export default Posts;