export interface IUserCompany {
    "department": string,
    "name": string,
    "title": string,
    "address": {
        "address": string,
        "city": string,
        "state":string,
        "stateCode": string,
        "postalCode": number,
        "coordinates": {
            "lat": number,
            "lng": number
        },
        "country": string
    }
}