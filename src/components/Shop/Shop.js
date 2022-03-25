import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts ]= useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts (data))
    },[])

    const handleAddToCart =(product)=>{
        console.log(product);
        const newcart =[...cart,product]
        setCart(newcart);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map( (product)=> <Product 
                product={product}
                handleAddToCart ={handleAddToCart}
                key={product.id}
                ></Product>)
            }
            </div>
            <div className="shopping-cart">
                <h1>Shopping-Cart</h1>
                <h1>Total Item ordered :{cart.length}</h1>
            </div>
        </div>
    );
};

export default Shop;