import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {product,handleAddToCart}=props
    const {name,seller,img,ratings,price}=product
    
    // console.log(name);


    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
          <p className='product-name'>{name}</p>
           <p className='product-price'>Price:${price}</p>
           <p><small>Seller :{seller}</small></p>
           <p><small>Rating: {ratings} stars</small></p>
          </div>
          <div >
              <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                  Add to cart
                  <FontAwesomeIcon icon={faShoppingCart} className="icon"></FontAwesomeIcon>
              </button>
          </div>

        </div>
    );
};

export default Product;