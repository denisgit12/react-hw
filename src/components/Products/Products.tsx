import React, {useEffect, useState} from 'react';
import {getProducts, refresh} from "../../services/authSevices";
import {retriveLocalStorage} from "../../helpers/retriveLocalStorage";

import {ITokens} from "../../models/ITokens";
import {IProduct} from "../../models/IProduct";
import Product from "../Product/Product";
import '../Product/styleProduct.css'
import {useNavigate} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const tokensOld = retriveLocalStorage<ITokens>('tokens');
    const token = localStorage.getItem('tokens');
    const navigate = useNavigate();

    useEffect(() => {
        getProducts().then(product => setProducts(product))
            .catch(async (reason) => {
                if (reason.response.status === 401) {
                    if (tokensOld.refreshToken) {
                        await refresh(navigate)
                            // .then(value => getProducts()
                            //     .then(products => {
                            //         if (products) {
                            //             setProducts(prevState => products)
                            //         }
                            //     }))
                    } else {
                        if (token) {
                            navigate('/')
                        } else {
                            navigate('/login')
                        }
                    }

                }
            })

        // getProducts()
        //     .then(products => {
        //         if (products) {
        //             setProducts(prevState => products)
        //         }
        //     })
        //     .catch(reason => {
        //         if (tokensOld.refreshToken){
        //             refresh()
        //                 .then(value => getProducts()
        //                     .then(products => {
        //                         if (products) {
        //                             setProducts(prevState => products)
        //                         }
        //                     }))
        //         }else {
        //
        //                 if (token){
        //                     navigate('/')
        //                 }
        //                 else {
        //                     navigate('/login')
        //                 }
        //
        //         }
        // })

    }, [tokensOld.refreshToken, token, navigate]);
    return (
        <div className={'headBoProduct'}>
            {products.map(value => <Product product={value} key={value.id}/>)}
        </div>
    );
};

export default Products;