import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useSelector } from 'react-redux';
const Header = () => {
    const result=useSelector((state)=>state.cartData);
     console.log("data in header",result)
  return (
    <div className='header'>
        <div className='cart-div'>
            <span>{result.length}</span>
            <LocalMallIcon/>
            

        </div>
    </div>
  )
}

export default Header