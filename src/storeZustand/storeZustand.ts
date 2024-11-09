import {IUser} from "../models/IUser";
import {create} from "zustand/react";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

export type StoreType = {
    userSlice: {
        allUsers: IUser[],
        loadUsers: (users: IUser[]) => void
    },
    postSlice: {
        allPosts: IPost[],
        loadPosts: (posts: IPost[]) => void
    }, commentSlice: {
        allComments: IComment[],
        loadComments: (comments: IComment[]) => void
    }
}

export let useStore = create<StoreType>()((set) => {
    return {
        userSlice: {
            allUsers: [],
            loadUsers: (users: IUser[]) => {
                return set(state => ({
                    ...state,
                    userSlice: {
                        ...state.userSlice,
                        allUsers: users,
                    }
                }))
            }
        },
        commentSlice: {
            allComments: [],
            loadComments: (comments: IComment[]) => {
                return set(state => ({
                    ...state,
                    commentSlice: {
                        ...state.commentSlice,
                        allComments: comments
                    }
                }))
            }
        },
        postSlice: {
            allPosts: [],
            loadPosts: (posts: IPost[]) => {
                return set(state => ({
                    ...state,
                    postSlice:{
                        ...state.postSlice,
                        allPosts: posts
                    }
                }))
            }
        }
    }
})