import {axiosInstance} from "../axiosInstance";
import {IComment} from "../../models/IComment";

export const getComment = async ():Promise<IComment[]> =>{
    const {data} = await axiosInstance.get<IComment[]>('/comments');
    return data;
}