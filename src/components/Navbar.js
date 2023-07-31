import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {  NavDropdown } from "react-bootstrap";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('user-info');
    // localStorage.clear();
    navigate("/login");
  }


  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#e3f2fd'}}>
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="/favicon-32x32.png" alt="Logo" width="35" height="30" className="d-inline-block align-text-top mx-2"/>
      Gurkha
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {localStorage.getItem("user-info") ? (
          <>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/interndetails">Intern Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/internlist">Intern DashBoard</a>
        </li>
        </>) : (<>
        {/* <li className="nav-item">
        <Link  className="nav-link mx-1" to="/register" >Register</Link>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link mx-1" to="/login" >Log in</Link>
        </li>
        </>)}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
  {localStorage.getItem("user-info")  ? (
          // <Nav>
            <NavDropdown title={user && user.name} style={{ 
            backgroundColor: "gray",
            // border: "1px solid black",
            borderRadius: "5px"}}>
              <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          // </Nav>
         ) : null} 
</nav>
    </>
  )
}

export default Navbar
