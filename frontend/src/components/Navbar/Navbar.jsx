import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import carticon from '../Assets/carticon.png'
import { useState } from 'react'
const Navbar = () => {
    const [menu,setMenu] = useState('shop')
    return (
        <div className='navbar'>
          <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}>Shop{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('fruits')}}>Fruits{menu=="fruits"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('veges')}}>Vegetables{menu=="veges"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('animal')}}>Products{menu=="animal"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
            <button>Login</button>
            <img src={carticon} alt=""/>
            <div className='nav-cart-count'>0</div>
          </div>
        </div>
    )
}

export default Navbar

