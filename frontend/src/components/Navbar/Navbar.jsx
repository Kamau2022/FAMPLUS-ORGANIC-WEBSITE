import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import carticon from '../Assets/carticon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu] = useState('shop')
    return (
        <div className='navbar'>
          <div className='nav-logo'>
            <img src={logo} alt=""/>
            <p>FAMPLUS</p>
          </div>
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu('shop')}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('fruits')}}><Link style={{ textDecoration: 'none'}}to='/fruits'>Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('vegetables')}}><Link style={{ textDecoration: 'none'}}to='/vegetables'>Vegetables</Link>{menu==="vegetables"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('products')}}><Link style={{ textDecoration: 'none'}}to='/products'>Products</Link>{menu==="products"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={carticon} alt=""/></Link>
            <div className='nav-cart-count'>0</div>
          </div>
        </div>
    )
}

export default Navbar

