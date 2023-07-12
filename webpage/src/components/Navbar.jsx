import React, {useState} from 'react'
import logo from '../img/logo/logo.png'
import './nav.css'
import ResponsiveNav from './ResponsiveNav'

const Navbar = () => {
  const [open, setOpen] = useState("navItems")
  const [menu , setMenu] = useState("menu-bar")

  const toggleMenu = () => {
    open === "navItems" ? setOpen("navItems live-nav") : setOpen("navItems")

    menu === "menu-bar" ? setMenu("menu-bar")
    : setMenu("")

    menu.addEventListener('resize', function() {
      open()
    })

  }

  return (
    <>
      <div className="body">
        <div className="navBar">
            <div className="navLogo">
                <div className="logo-img">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
            <ul className={open}>
              <div className='top-menu_item'>
                <div className='top-menu_img'>
                  <img src={logo} alt="" />
                </div>
                <div className={`top-close-icon`} onClick={toggleMenu}>
                  <ion-icon name="close-outline"></ion-icon>
                </div>
              </div>
              <li className="nav-item"><a href='#home'>Home</a> </li>
              <li className="nav-item"><a href='#about'>About us</a> </li>
              <li className="nav-item"><a href='#services'>Services</a> </li>
              <li className="nav-item"><a href='#clients'>Clients</a> </li>
              <li className="nav-item"><a href='#testimonial'>Testimonial</a> </li>
              <li className="nav-item"><a href='#contact'>Contact</a> </li>
            </ul>
            <div className={menu} onClick={toggleMenu} >
              <ion-icon name="menu-outline"></ion-icon>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
