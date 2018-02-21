import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const NavBar = props => {
  return(
    <div>
      <div className="navbar">
        <span><BackButton /></span>
        <span><Link to='/'> HOME </Link></span>
        <span><Link to='/resume'> RESUME </Link></span>
        <span><Link to='/projects'> PROJECTS </Link></span>
      </div>
      <div className="content">
        <h1 className="page-title">Jane Says</h1>
        { props.children }
      </div>
    </div>
  )
}

export default NavBar;
