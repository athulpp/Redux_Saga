import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { productSearch } from '../redux/productAction';
const Header = () => {
    const result=useSelector((state)=>state.cartData);
     console.log("data in header",result)

     const dispatch=useDispatch();
  return (
    <div className='header'>
       <Link to='/'><h1 className='logo'>E-COM</h1></Link> 
       <div className='search-box'>
        <input type='text' onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder='Search Product'></input>
       </div>
        <Link to="/cart">
        <div className='cart-div'>
            <span>{result.length}</span>
            <LocalMallIcon/>
           

        </div>
        </Link>
    </div>
  )
}

export default Header