import {LoginFormProps} from "../models/LoginFormProps";
import {axiosInstance} from "./axiosInstance";
import {IUserWithToken} from "./IUserWithToken";
import {IProduct} from "../models/IProduct";
import {BaseResponse} from "../models/BaseResponse";
import {ITokens} from "../models/ITokens";
import {retriveLocalStorage} from "../helpers/retriveLocalStorage";
import {AxiosError} from "axios";

export const login = async ({username, password}: LoginFormProps): Promise<IUserWithToken> => {
    const {data} = await axiosInstance.post<IUserWithToken>('/login', {
        username, password, expiresInMins: 1
    })
    const {accessToken, refreshToken} = data;
    localStorage.setItem('tokens', JSON.stringify({accessToken, refreshToken}));
    return data;
}

axiosInstance.interceptors.request.use(request => {
    if (request.method?.toUpperCase() === 'GET') {
        let token = retriveLocalStorage<ITokens>('tokens');
        request.headers.Authorization = 'Bearer ' + token.accessToken
    }
    return request;
});


export const getProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<BaseResponse & { products: IProduct[] }>('/products')
    return data.products
}

export const refresh = async (navigate: any) => {
    try {
        const tokensOld = retriveLocalStorage<ITokens>('tokens');

        const response = await axiosInstance.post<ITokens>('/refresh', {
            refreshToken: tokensOld.refreshToken,
            expiresInMins: 1
        })

        tokensOld.accessToken = response.data.accessToken;
        tokensOld.refreshToken = response.data.refreshToken;

        localStorage.setItem('tokens', JSON.stringify({
            accessToken:response.data.accessToken,
            refreshToken:response.data.refreshToken
        }));

    }catch (e) {
        const axiosError = e as AxiosError;
        if (axiosError.response && axiosError.response.status === 403) {
            localStorage.removeItem('tokens');
            navigate('/login')
        }
    }



}