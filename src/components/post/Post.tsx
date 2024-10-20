import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

import './stylePost.css'

type PostProps = {
    post: IPost;
}
const Post: FC<PostProps> = ({post}) => {
    const {id, body, title} = post;
    return (
        <div className={'headBoxPost'}>
            <h1>{id}</h1>
            <h2>{body}</h2>
            <h2>{title}</h2>
        </div>
    );
};

export default Post;