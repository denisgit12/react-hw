import React, {useEffect, useState} from 'react';

import {IPost} from "../../models/IPost";
import {getPost} from "../../services/postService/postService";
import Post from "../post/Post";
import '../post/stylePost.css'


const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPost().then(value => setPosts(value));
    },[])
    return (
        <div className={'headBoxPosts'}>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;