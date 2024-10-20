export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: ObjectAddress;
	phone: string;
	website: string;
	company: ObjectCompany;
}
interface ObjectAddressGeo {
	lat: string;
	lng: string;
}
export interface ObjectAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: ObjectAddressGeo;
}
export interface ObjectCompany {
	name: string;
	catchPhrase: string;
	bs: string;
}