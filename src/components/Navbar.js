import React from 'react'
import PropTypes from 'prop-types'
 import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
         <Link className="navbar-brand" to="/">{props.title} </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
           {/* { <li className="nav-item dropdown">
             <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Action</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="/">Something else here</Link></li>
              </ul>
            </li>} */}
            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('primary')}} ></div>
              <div className="bg-success rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('success')}} ></div>
              <div className="bg-danger rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('danger')}} ></div>
              <div className="bg-warning rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('warning')}} ></div>
              <div className="bg-dark rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('dark')}} ></div>
              <div className="bg-light rounded mx-2" style={{height:'30px',width:'30px',cursor:'pointer'}} onClick={()=>{props.toggleMode('light')}} ></div>
            </div>
          
          <div className={`form-check form-switch ${props.mode==='light'?'dark':'light'}`}>
           <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="flexSwitchCheckDefault"/>
           <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >Toggle mode </label>
       </div>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          
    
</div>
        
      </div>
    </nav>
  )
}
Navbar.propTypes={
title:PropTypes.string.isRequired,
aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps= {
    title:'Set title here',
    aboutText:'About text here'
};