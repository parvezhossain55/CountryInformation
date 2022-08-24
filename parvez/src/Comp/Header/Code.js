import React from 'react';
import './Header.css'
import Logo from '../../images/logo.png'
const Code = ()=>{
    return (
        <div class='header'>
        <img src={Logo}alt='' />
         <nav>
         <a href='/shop'>Shop</a>
          <a href='/review'>Order Review</a>
           <a href='/manage'>Manage Inventory</a>
         
         </nav>
        </div>
        
        );
};


export default Code;