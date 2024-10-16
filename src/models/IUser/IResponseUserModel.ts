import {IUser} from "./IUser";

export interface IResponseUserModel {
    users:IUser[],
    total: number,
    skip: number,
    limit: number
}