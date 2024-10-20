export interface IProduct {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: IProductDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: IProductReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: IProductMeta;
	images: string[];
	thumbnail: string;
}
interface IProductDimensions {
	width: number;
	height: number;
	depth: number;
}
interface IProductReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
interface IProductMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}