import React, {useEffect} from 'react';

import {useStore} from "../../storeZustand/storeZustand";
import {axiosInstance} from "../../axiosInstance/axiosInstance";
import {IComment} from "../../models/IComment";

const Comments = () => {

    let {commentSlice: {loadComments, allComments}} = useStore();

    useEffect(() => {
        axiosInstance.get<IComment[]>('/comments').then(value => loadComments(value.data))
    }, [loadComments]);

    return (
        <div>
            {
                allComments.map(value =>
                    <div key={value.id}>
                        <h2>{value.id}</h2>
                        <h2>{value.body}</h2>
                    </div>)
            }
        </div>
    );
};

export default Comments;