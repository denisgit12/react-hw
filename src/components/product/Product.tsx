import React, {FC} from 'react';

import {IProduct} from "../../models/IProduct";
import './styleProduct.css'

type ProductProps = {
    product:IProduct
}

const Product: FC<ProductProps> = ({product}) => {
    const {id, brand, price, weight} = product;
    return (
        <div className={'boxProducts'}>
            <h1>Id: {id}</h1>
            <h2>Brands: {brand}</h2>
            <h2>Price: {price}</h2>
            <h2>Weight: {weight}</h2>

        </div>
    );
};

export default Product;