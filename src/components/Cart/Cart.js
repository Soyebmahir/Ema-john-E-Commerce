import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart);
    let total =0;
    let shippingCharge =0; 
    for(const product of cart){

        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    // 10% tex 
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total+shippingCharge+tax;
    return (
        <div className='cart'>
             <h1>Shopping-Cart</h1>
                <h4>Item Ordered :{cart.length}</h4>
                <h4>Total Price :${total}</h4>
                <h4>Total Shipping Charge :${shippingCharge}</h4>
                <h4>Total Tax :${tax}</h4>
                <h4>Grand Total :${grandTotal}</h4>
        </div>
    );
};

export default Cart;