import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { NavDropdown } from "react-bootstrap";

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
        <nav className="navbar navbar-expand-lg navbar-dark  nav-pills sticky-top" style={{ backgroundColor:'#3f3d56' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/favicon-32x32.png" alt="Logo" width="35" height="30" className="d-inline-block align-text-top mx-2"/>
              Gurkha Technology
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {localStorage.getItem("user-info") ? (
                  <>
                    <li className="nav-item mx-1">
                      <NavLink className="nav-link" activeClassName="active" exact to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/About">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item mx-1">
                      <NavLink className="nav-link" activeClassName="active" to="/interndetails">
                        Intern Details
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" activeClassName="active" to="/attadance">
                        Attadance
                      </NavLink>
                    </li>
                    <li className="nav-item mx-1">
                      <NavLink className="nav-link" activeClassName="active" to="/internlist">
                        Intern DashBoard
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                    <NavLink className="nav-link mx-1" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link mx-1" to="/login">Log in</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          {localStorage.getItem("user-info") ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link mx-3 bg-danger" onClick={logout} >Logout</NavLink>
                  </li>  
             </ul>
          ) : null} 
        </nav>
    </>
  );
}

export default Navbar;
