import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.png'
import './Navbar.scss'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {" "}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active mr-5">
                <Link className="nav-link" to="/">
                  Home
                 <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>     
              <li className="nav-item">
                <Link className="nav-link" to="contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
