import React, { useState } from 'react'
import {Link } from "react-router-dom";

const Header = () => {
const [isLoggedIn,setIsLoggedIn]=useState(true)


  return (
    <div className="header">
    <div>
      <a href="">
        <img
          className="image"
          src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg"
          alt=""
        />
      </a>
    </div>
    <div className="nva-item">
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/About">About</Link></li>
        <li> <Link to="/Contact">Contact</Link></li>
        <li> <Link to="/Cart">Cart</Link></li>
      </ul>
    </div>
    <div className='login'>
    {
      (isLoggedIn)?( <button  onClick={()=>{setIsLoggedIn(false)}}>Login</button>):
      (<button onClick={()=>{setIsLoggedIn(true)}}>Logout</button>)
    }
    </div>
  </div>
  )
}

export default Header