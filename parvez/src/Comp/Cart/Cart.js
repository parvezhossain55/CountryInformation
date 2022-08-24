import React from 'react';


const Cart = (props)=>{
   
const cart = props.cart
// const total = cart.reduce((total,prd)=>total+prd.price,0)
// console.log(total);
let total = 0;
for (let i=0 ; i < cart.length; i++){
    const product = cart[i]
    total = total + product.price;
    
}
    return (
        <div class='cart'>
        <h2>Order Summery </h2>
        <h3> Item Ordered :  {cart.length}</h3>
        <p>Total Price : {total}</p>
        console.log(total);
           
        </div>
         
        
        );
};


export default Cart;