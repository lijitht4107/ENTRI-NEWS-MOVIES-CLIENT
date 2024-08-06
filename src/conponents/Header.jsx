import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar-blogs'>
            <li >
                <Link to='/' className='nav-items'>Home</Link>
            </li>
            <li>
            <Link to='/signup' className='nav-items'>Signup</Link>
            </li>
            <li>
            <Link to='/login' className='nav-items'>Login Form</Link>
            </li>
            <li>
            <Link to='/newblog' className='nav-items'>Add Blog</Link>
            </li>
            <li>
              <Link to ='/settings' className='nav-items'>Settings</Link>
            </li>
            
        </nav>
      </header>
    </div>
  )
}

export default Header
