import {IPost} from "../../models/IPost";
import {axiosInstance} from "../axiosInstance";

export const getPost = async ():Promise<IPost[]>=>{
    const {data} = await axiosInstance.get<IPost[]>('/posts');
    return data;
}