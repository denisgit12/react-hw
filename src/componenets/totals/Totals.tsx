import React, {useEffect, useState} from 'react';

import {useStore} from "../../storeZustand/storeZustand";
import {mergePostComments} from "../../helper/helper";
import {IPost} from "../../models/IPost";

const Totals = () => {

    let {postSlice:{allPosts}, commentSlice:{allComments}} = useStore();

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        let iPosts = mergePostComments(allPosts, allComments);

        setPosts(iPosts);

    }, [allComments, allPosts]);
    return (
        <div>
            {
                posts.map(value =>
                    <div key={value.id}>
                        <li>{value.id}</li>
                        <li>{value.comments.length}</li>
                        <br/>

                    </div>
                )
            }
        </div>
    );
};

export default Totals;