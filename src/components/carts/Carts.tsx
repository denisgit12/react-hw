import React, {useEffect, useState} from 'react';

import Car from "../cart/Cart";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../pagination/Pagination";
import {ICart} from "../../models/ICart";
import {apiCart} from "../../services/api.cart";

const Carts = () => {
    const [query,] = useSearchParams({page: '1'});
    const [flag, setFlag] = useState<boolean>(false);
    const [carts, setCarts] = useState<ICart[]>([]);
    const [cartsTotal, setCartsTotal] = useState<number>(0);


    const limit = 10

    useEffect(() => {
        const page = query.get('page');

        if (page){
            console.log(page)
            apiCart.getAll(+page, limit).then(value => {

                setCarts(value.carts);
                setCartsTotal(value.total);

                const lastId = carts.length ;

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
                {carts.map(value => <Car key={value.id} cart={value} />)}
            </div>

            <PaginationComponent productsTotal={cartsTotal} flag={flag}/>

        </div>
    );
};

export default Carts;