import {IPost} from "./IPost";

export interface IResponsePostModel {
    post: IPost[];
    total:number;
    skip:number;
    limit:number
}