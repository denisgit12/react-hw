import React, {FC, useEffect, useState} from 'react';
import Product from "../ Product/Product";
import {IProductModels} from "../../models/IProdustModels/IProductModels";

const Products: FC = () => {
    const [users, setUsers] = useState<IProductModels[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(users => setUsers(users.products))
    }, [])

    return (
        <div>
            {users.map((value:IProductModels, index:number) => <Product key={index} user={value}/>)}
        </div>
    );
};

export default Products;