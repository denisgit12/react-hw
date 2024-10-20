import React, {useEffect, useState} from 'react';

import {IComment} from "../../models/IComment";
import {getComment} from "../../services/commentService/commentService";
import Comment from "../comment/Comment";

import '../comment/styleComment.css'

const Comments = () => {

    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComment().then(value => setComments(value));
    },[])

    return (
        <div className={'headBoxComments'}>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default Comments;