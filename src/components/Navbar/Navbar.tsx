import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="NavBar">
    <div className="nav-container">
      <div className="nav-header">
        <Link to="/" href="/">
          Set!
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
