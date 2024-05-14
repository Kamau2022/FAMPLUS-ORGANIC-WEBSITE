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
            <li onClick={()=>{setMenu('products')}}><Link style={{ textDecoration: 'none'}}to='/products'>Products</Link>{menu==="products"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('services')}}><Link style={{ textDecoration: 'none'}}to='/services'>Services</Link>{menu==="services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('workshops')}}><Link style={{ textDecoration: 'none'}}to='/workshops'>Workshops</Link>{menu==="workshops"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('blogs')}}><Link style={{ textDecoration: 'none'}}to='/blogs'>Blogs</Link>{menu==="blogs"?<hr/>:<></>}</li>
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

