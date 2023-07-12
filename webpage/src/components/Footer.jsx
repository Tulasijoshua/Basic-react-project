import React from 'react'
import './footer.css'
import logo from '../img/logo/logo.png'

const Footer = () => {
  return (
    <>
      <div className='footer' id="contact">
        <div className='footer-container'>
            <div className='footer-card'>
                <div className='footer-img'>
                    <img src={logo} alt="" />
                </div>
                <p className="footer-para">
                    Subscribe for our latest articles and news resources
                </p>
                <div className='footer-icons'>
                    <div className="icon">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    </div>
                    <div className="icon">
                        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                    </div>
                    <div className="icon">
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <div className="icon">
                        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    </div>
                </div>
            </div>
            <div className='footer-card'>
                <h2 className='card-header'>Links</h2>
                <div className='card-items'>
                    <div className='item'><a href="#">About us</a></div>
                    <div className='item'><a href="#">Services</a></div>
                    <div className='item'><a href="#">Project</a></div>
                </div>
            </div>
            <div className='footer-card'>
                <h2 className='card-header'>Contact</h2>
                <div className='card-items'>
                    <div className='item'><a href="#">0509911477</a></div>
                    <div className='item'><a href="#">info@forecast5.com</a></div>
                </div>
            </div>
            <div className='footer-card last-icons'>
                <div className='footer-icons'>
                    <div className="icon">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    </div>
                    <div className="icon">
                    <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                    </div>
                    <div className="icon">
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <div className="icon">
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className='below-footer'>
        <small>© All Copyright 2023 by Forcast5</small>
      </div>
    </>
  )
}

export default Footer
