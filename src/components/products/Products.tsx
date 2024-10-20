import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import Product from "../product/Product";
import {IProduct} from "../../models/IProduct";
import {apiProduct} from "../../services/api.product";
import PaginationComponent from "../pagination/Pagination";
import '../product/styleProduct.css'

const Products = () => {

    const [query,] = useSearchParams({page: '1'});
    const [flag, setFlag] = useState<boolean>(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [productsTotal, setProductsTotal] = useState<number>(0);


    const limit = 10

    useEffect(() => {
        const page = query.get('page');
        if (page){
            apiProduct.getAll(+page, limit).then(value => {

                setProducts(value.products);
                setProductsTotal(value.total);

                const lastId = value.products[value.products.length-1].id;
                if (lastId>=value.total){
                    setFlag(true)
                }else {
                    setFlag(false)
                }
            })


        }
    }, [query])
    return (
        <div>

            <div className={'headBoxProducts'}>
                {products.map(value => <Product key={value.id} product={value} />)}
            </div>

            <PaginationComponent productsTotal={productsTotal} flag={flag}/>

        </div>
    );
};

export default Products;