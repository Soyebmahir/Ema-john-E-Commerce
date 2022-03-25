import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,img,ratings,price}=props.product
    console.log(name);
    return (
        <div className='product'>
           <img src={img} alt="" />
           <p className='product-name'>{name}</p>
           
        </div>
    );
};

export default Product;