import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
function Header() {
  return (
   <div>
       <div className="header">
      <ul className="nav-list">


      <li>
            <Link  to="/">Home</Link>
            </li>
        <li>
          <Link to="/login">Login</Link>

        </li>
       
       <li>
       < Link to ="/register">Register</Link>
        </li>
        
        
        <li>
          <Link to="/about">About</Link>

        </li> 
        </ul>
      </div>
    </div>
  )
}

export default Header
