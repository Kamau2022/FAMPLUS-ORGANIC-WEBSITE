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
            <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('fruits')}}><Link to='/fruits'>Fruits</Link>{menu==="fruits"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('veges')}}><Link to='/veges'>Vegetables</Link>{menu==="veges"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu('animal')}}><Link to='/animal'>Products</Link>{menu==="animal"?<hr/>:<></>}</li>
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

