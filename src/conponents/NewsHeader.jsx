import React from "react";
import logo from '../assets/images/logo.svg'
import {Link} from 'react-router-dom'
import './NewsStyle.css'

const NewsHeader = () => {
  return (
    <div>
      <header className="navbar">
        <img
          src={logo}
          alt="Entri news logo"
          className="logo"
        />
        <nav className="links">
          <ul>
            <li className="link">
              {" "}
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link to="#" className="link">
                New
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link to="#" className="link">
                Popular
              </Link>
            </li>
            <li className="link">
              {" "}
              <Link to="/trending" className="link">
                Trending
              </Link>
            </li>
            <li className="link">
              {" "}
              <a to="#" className="link">
                Categories
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NewsHeader;
