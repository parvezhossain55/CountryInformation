import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


import './Shop.css'
import fakeData from '../../fakeData'
import {useState} from 'react'
import Product from '../Products/Products.js'
import Cart from '../Cart/Cart.js'

const Shop = ()=>{
    const first10 = fakeData.slice(0,10)
    const[Products, setProducts]= useState(first10)
    const c=(product)=>{
       const newCart = [...cart,product]
       setCart(newCart);
       
    }
    const [cart,setCart] = useState([] )
    return (
        <div class='shopContainer'>
        <div class= 'shopProduct'>
        
        {
           Products.map(Pd=> <Product c={c} product={Pd} >habijabi</Product>)
        }
        
        </div>
        
        <div class='shopCart'>
            <Cart cart= {cart}></Cart>
           
        </div>
               
        
        </div>
        
        
        );
};


export default Shop;