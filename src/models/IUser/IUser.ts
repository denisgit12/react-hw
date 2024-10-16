import {IUserCompany} from "./IUserCompany";
import {IUserAddress} from "./IUserAddress";

export interface IUser {
    "id": number,
    "firstName": string,
    "lastName": string,
    "maidenName": string,
    "age": number,
    "gender": string,
    "email": string,
    "phone": number,
    "username": string,
    "password": string,
    "birthDate": string,
    "image": string,
    "bloodGroup": string,
    "height":number,
    "weight": number,
    "eyeColor": string,
    "hair": {
        "color": string,
        "type": string
    },
    "ip": string,
    "address": IUserAddress,
    "macAddress": string,
    "university": string,
    "bank": {
        "cardExpire": string,
        "cardNumber": number,
        "cardType": string,
        "currency": string,
        "iban": string
    },
    "company": IUserCompany,
    "ein": string,
    "ssn": string,
    "userAgent": string,
    "crypto": {
        "coin": string,
        "wallet": string,
        "network": string
    },
    "role": string
}