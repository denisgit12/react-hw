import {IProduct} from "../models/IProduct";
import {IBaseResponse} from "../models/IBaseResponse";
import {axiosInstance} from "./axiosInstance";

export const apiProduct = {
    getAll: async (page: number, limit: number): Promise<IBaseResponse & { products: IProduct[] }> => {

        const skip = (page - 1) * 10;
        const {data} = await axiosInstance.get<IBaseResponse & { products: IProduct[] }>('/products', {
            params: {
                skip: skip,
                limit: limit
            }
        })
        return data;
    }
}