import React, { useState } from "react"
import "./navbar.css"
import Dropdown from './Dropdown';
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <h3 className='logo'>Logo</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>

          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          <Link to='/appointments' className='appointments'>
            <li>Appointments</li>
          </Link>
          <Link to='/doctors' className='doctors'>
            <li>Doctors</li>
          </Link>
          <Link to='/patients' className='patients'>
            <li>Patients</li>
          </Link>
          <Link to='/services' className='services'>
            <li>Services</li>
          </Link>
          <Link to='/contact' className='contact'>
            <li>Contact</li>
          </Link>
          <Dropdown />
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
