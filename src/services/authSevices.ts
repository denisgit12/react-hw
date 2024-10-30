import {LoginFormProps} from "../models/LoginFormProps";
import {axiosInstance} from "./axiosInstance";
import {IUserWithToken} from "./IUserWithToken";
import {IProduct} from "../models/IProduct";
import {BaseResponse} from "../models/BaseResponse";
import {ITokens} from "../models/ITokens";
import {retriveLocalStorage} from "../helpers/retriveLocalStorage";

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
export const refresh = async () => {
    const tokensOld = retriveLocalStorage<ITokens>('tokens');

    const data = await axiosInstance.post<ITokens>('/refresh', {
        refreshToken: tokensOld.refreshToken,
        expiresInMins: 1
    })
    if (data.status === 401 || 403){
        localStorage.removeItem('tokens');
    }
        tokensOld.accessToken = data.data.accessToken;
        tokensOld.refreshToken = data.data.refreshToken;

        localStorage.setItem('tokens', JSON.stringify({accessToken:data.data.accessToken, refreshToken:data.data.refreshToken}));



}