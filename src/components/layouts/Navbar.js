import React from 'react'
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand ml-5" href="#"><img src={logo} alt="logo" style={{ width:'35px'}}/> </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span >
        <i className='fas fa-bars' style={{ color: '#fff '}}/>
      </span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white text-uppercase ml-5" to="/home">
            Home&nbsp;<i class="fas fa-home">
              </i> <span class="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white text-uppercase ml-5" to="/News">News
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white text-uppercase ml-5" to="/Contacts">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  text-white text-uppercase ml-5" to="/Details">Details</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white text-uppercase ml-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
  );

}

export default  Navbar;