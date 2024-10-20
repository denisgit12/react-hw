import {IBaseResponse} from "../models/IBaseResponse";
import {axiosInstance} from "./axiosInstance";
import {ICart} from "../models/ICart";

export const apiCart = {
    getAll: async (page: number, limit: number): Promise<IBaseResponse & { carts: ICart[] }> => {
        const skip = (+page - 1) * 10;
        const {data} = await axiosInstance.get<IBaseResponse & { carts: ICart[] }>('/carts', {
            params: {
                skip: skip,
                limit: limit
            }
        })
        return data;
    }
}