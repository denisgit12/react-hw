import React, {FC} from 'react';

import {IComment} from "../../models/IComment";
import './styleComment.css'

type CommentProps = {
    comment:IComment
}
const Comment :FC<CommentProps> = ({ comment}) => {

    const {id, name, body, email} = comment;
    return (
        <div className={'headBoxComment'}>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <h2>{body}</h2>
            <h2>{email}</h2>
        </div>
    );
};

export default Comment;