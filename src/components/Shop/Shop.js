import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const storedCart = getStoredCart();
        console.log(products);
        const savedCart = [];
        for (const id in storedCart)  {
            // console.log(id);
            const addedProducts =products.find(product=>product.id===id)
            if(addedProducts){
                console.log(addedProducts);
                const quantity=storedCart[id];
                addedProducts.quantity=quantity;
                savedCart.push(addedProducts)
            }  
        }
        setCart(savedCart);

    },[products])

    const handleAddToCart =(product)=>{
        // console.log(product);
        const newcart =[...cart,product]
        setCart(newcart);
        addToDb(product.id)
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
                <h1>Total Items :{products.length}</h1>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;