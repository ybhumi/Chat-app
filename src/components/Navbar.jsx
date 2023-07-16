import React from 'react'
import Add from "../img/women.jpg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className="logo1">Ghost Chat</span>
        <div className="user">
      <img className='navimg' scr={Add} alt=""/>
      <span>Anoki</span>
      <button className="logout">Log Out</button>
      </div>
    </div>
  )
}

export default Navbar
