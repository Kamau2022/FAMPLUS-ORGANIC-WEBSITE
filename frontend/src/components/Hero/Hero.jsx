import React from 'react';
import './Hero.css';
import onion from '../Assets/onion.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW PRODUCTS ONLY</h2>
                <div>
                    <div className="hero-icon">
                        <p>new</p>
                    </div>
                    <p>Products</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Organic Products</div>
                </div>
            </div>
            <div className="hero-right">
                <img src={onion} alt=""/>
            </div>
        </div> 
    );
}

export default Hero;
