import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import X_icon from '../Assets/X_icon.png'
function Footer() {
    return (
        <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>FAMPLUS</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        <div className="footer-icons-container">
        </div>
        <div className="footer-icons-container">
            <img src={X_icon} alt="" /> 
        </div>
        <div className="footer-icons-container">
            <img src={facebook_icon} alt="" /> 
        </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
        </div>
    )
}

export default Footer
