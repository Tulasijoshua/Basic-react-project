import React from 'react'
import './responsiveNav.css'
import logo from '../img/logo/logo.png'

const ResponsiveNav = () => {
  return (
    <div className='responsive'>
      <div className="responsive-card">
        <div className="top-items">
            <div className="top-img">
                <img src={logo} alt="" />
            </div>
            <div className="close-icon">
              <ion-icon name="close-outline"></ion-icon>
            </div>
        </div>
        <div className="responsive-menu">
          <div className="main-menu">
            <div className='menu-icon'>
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">Home</a></span>
          </div>
          <div className="main-menu">
            <div className='menu-icon'>
            <ion-icon name="information-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">About us</a></span>
          </div>
          <div className="main-menu">
            <div className='menu-icon'>
              <ion-icon name="server-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">Services</a></span>
          </div>
          <div className="main-menu">
            <div className='menu-icon'>
              <ion-icon name="people-circle-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">Clients</a></span>
          </div>
          <div className="main-menu">
            <div className='menu-icon'>
              <ion-icon name="newspaper-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">Testimonials</a></span>
          </div>
          <div className="main-menu">
            <div className='menu-icon'>
              <ion-icon name="headset-outline"></ion-icon>
            </div>
            <span className="menu-name"><a href="#">Contact</a></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveNav
