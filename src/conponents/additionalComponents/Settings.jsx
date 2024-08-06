import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Settings = () => {
  const navigate =useNavigate()
    const hanndleLogout =()=>{
        sessionStorage.removeItem('userToken')
        navigate('/')
    }
  return (
    <div>
      <nav>
        <li>
            <Link to='/users'>Users List</Link>
        </li>
        <li>
            <Link  onClick={hanndleLogout}>Log out</Link>
        </li>
       
      </nav>
    </div>
  )
}

export default Settings
