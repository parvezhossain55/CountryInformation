import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Products.css'


const Products = (props)=>{
   const {img,name,seller,stock,price} = props.product

    return (
        <div class='product'>
        <div class= 'productImg'>
        <img src={img} alt= '' />
        </div>
             <div class= 'productName'>
      <h3>{name}</h3>
      <p><small>by : {seller}</small></p>
        <p>Price ${price}</p>
          <p> Only {stock} is available</p>
                  <button onClick={props.c}><FontAwesomeIcon icon={faCoffee} />Ami button</button>
        </div>
      
      
           
        </div>
         
        
        );
};


export default Products;