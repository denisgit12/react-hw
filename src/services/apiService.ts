import axios from 'axios';
import {IPost} from "../models/IPost";
import {IFormProps} from "../models/IFormProps";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});


export const apiServicePost = {
    post: async (dataFromForm: IFormProps): Promise<IPost> => {
            const {data} = await axiosInstance.post<IPost>('/posts', dataFromForm);
            return data;


    }
}