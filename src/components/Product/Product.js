import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,seller,img,ratings,price}=props.product
    console.log(name);
    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
           <p className='product-price'>Price:${price}</p>
           <p><small>Seller :{seller}</small></p>
           <p><small>Rating: {ratings} stars</small></p>
          </div>
          <div className='btn-cart'>
              <button>
                  Add to cart
              </button>
          </div>

        </div>
    );
};

export default Product;