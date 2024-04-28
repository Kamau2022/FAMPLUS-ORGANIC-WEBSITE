import React from 'react'
import './Hero.css'
import logo from '../Assets/logo.png'
import onion from '../Assets/onion.png'
import tomato from '../Assets/tomato.png'
const Hero = () => {
    return (
        
       <div className='hero'>
       <div className="hero-left">
        <h2>New ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={logo} alt=""/>
            </div>
            <p>Collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-button"></div>
        <div>Latest collections</div>
        <img src={tomato} alt=""/>
       </div>
       <div className="hero-right">
       <img src={onion} alt=""/>
       </div>
       </div> 
    )
}

export default Hero

