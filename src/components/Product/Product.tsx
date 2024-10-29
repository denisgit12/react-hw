import React, {FC} from 'react';
import {IProduct} from "../../models/IProduct";

type ProductProps = {
    product:IProduct
}
const Product:FC<ProductProps> = ({product}) => {
    const {brand, weight, price} = product
    return (
        <div className={'boxProduct'}>
            <h2>{brand}</h2>
            <h2>{weight}</h2>
            <h2>{price}</h2>
        </div>
    );
};

export default Product;