

import {addToCart, emptyCart, removeFromCart} from '../redux/action'
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';



function Main() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.productData);
  console.log("data in main component",data);

  const product={
    name:'apple',
    category:'fruit',
    price:20,
    color:'red'
  }
  
  return (
    <div >

     <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
     <div>
        <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove from cart</button>
     </div>

     <div>
        <button onClick={()=>dispatch(emptyCart())}>Empty the cart</button>
     </div>

     <div>
        <button onClick={()=>dispatch(productList())}>Call Product List</button>
     </div>
     <div className='product-container'>
        {
           data.map((item)=><div className='product-item'>
            <img src={item.photo}/>
            <div>Name :{item.name}</div>
            <div>Color:{item.color}</div>
            <div>Price :{item.price}</div>
            <div>Category :{item.category}</div>
           
           </div>) 
        }

     </div>
    </div>
  );
}

export default Main;
