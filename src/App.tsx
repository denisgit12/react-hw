import React, {useState} from 'react';
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./services/apiService";
import {IPost} from "./models/IPost/IPost";
import Post from "./components/post/Post";

function App() {

    const [posts, setPosts] = useState<IPost>();

    const lift = async (id:number) => {
        setPosts( await postService.getPostOfUser(id)) ;
    }

    return (
        <div>
            {posts?<Post key={posts?.id} posts={posts}/>:''}
            <hr/>
            <Users lift={lift}/>
        </div>
    );
}

export default App;
