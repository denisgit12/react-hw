import axios from "axios";
import {IUser} from "../models/IUser/IUser";
import {IResponseUserModel} from "../models/IUser/IResponseUserModel";
import {IPost} from "../models/IPost/IPost";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com"
});

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        const response = await axiosInstance.get<IResponseUserModel>('/users');
        const data = response.data;
        return data.users;
    }

};
export const postService = {
    getPostOfUser: async (id: number): Promise<IPost> => {
        const response = await axiosInstance.get<IPost>(`/posts/${id}`);
        return (response.data);

    }
}

