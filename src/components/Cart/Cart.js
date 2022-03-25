import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    return (
        <div className='cart'>
             <h1>Shopping-Cart</h1>
                <h4>Item Ordered :{cart.length}</h4>
                <h4>Total Price :</h4>
                <h4>Total Shipping Charge :</h4>
                <h4>Total Tax :</h4>
                <h4>Grand Total :</h4>
        </div>
    );
};

export default Cart;