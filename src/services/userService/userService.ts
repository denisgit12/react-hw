import {IUser} from "../../models/IUser";
import {axiosInstance} from "../axiosInstance";

export const getUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users')
    return data;
}