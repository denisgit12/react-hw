import React, {FC} from 'react';
import {IPost} from "../../models/IPost/IPost";

type PostProps = {
    posts: IPost
}
const Post: FC<PostProps> = ({posts}) => {
    const {id, body, title} = posts;
    return (
        <div>
            <h2>id: {id}</h2>
            <p>body: {body}</p>
            <p>title: {title}</p>
        </div>
    );
};

export default Post;