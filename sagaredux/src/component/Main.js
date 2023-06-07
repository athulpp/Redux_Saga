

import {addToCart, emptyCart, removeFromCart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import React ,{useEffect} from 'react';


function Main() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.productData);
  console.log("data in main component",data);

  useEffect(()=>{
    dispatch(productList());
  },[]);
  
  return (
    <div >

    

     <div>
        <button onClick={()=>dispatch(emptyCart())}>Empty the cart</button>
     </div>

     {/* <div>
        <button onClick={()=>dispatch(productList())}>Call Product List</button>
     </div> */}
     <div className='product-container'>
        {
           data.map((item)=><div id={item.id} className='product-item'>
            <img src={item.photo}/>
            <div>Name :{item.name}</div>
            <div>Color:{item.color}</div>
            <div>Price :{item.price}</div>
            <div>Category :{item.category}</div>
           <button onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
           <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove from cart</button>
           </div>) 
        }

     </div>
    </div>
  );
}

export default Main;
