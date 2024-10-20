export interface ICart {
	id: number;
	products: ICartProducts[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
export interface ICartProducts {
	id: number;
	title: string;
	price: number;
	quantity: number;
	total: number;
	discountPercentage: number;
	discountedTotal: number;
	thumbnail: string;
}