import React from 'react'
import './header.css'

 function Header() {
  return (
    <div className='header'>
        <h1 className='headerText'>Weather App</h1>
        <p className='descriptionText'>Please Enter Your City Below.</p>
    </div>
  )
}
export default Header;