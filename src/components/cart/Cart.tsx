import React, {FC} from 'react';

import {ICart} from "../../models/ICart";

type CartProps ={
    cart: ICart
}
const Cart: FC<CartProps> = ({cart}) => {
    const {id, totalProducts} = cart;
    return (
        <div>
         <h1>Id: {id}</h1>

            <h2>Total Products: {totalProducts}</h2>
        </div>
    );
};

export default Cart;