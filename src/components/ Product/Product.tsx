import React, {FC} from 'react';
import {IProductModels} from "../../models/IProdustModels/IProductModels";

type TypeUser = {user:IProductModels}


const Product:FC<TypeUser> = ({user}) => {
    const {id, price, title} = user;
    return (
        <div>
            <h1>{id}</h1>
            <p>{price}</p>
            <p>{title}</p>
        </div>
    );
};

export default Product;