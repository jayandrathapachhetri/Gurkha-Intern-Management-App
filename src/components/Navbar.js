import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  console.warn(user);

  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem('user-info');
    navigate("/");
    console.log(" user logout");
    // localStorage.clear();
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-pills sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/favicon-32x32.png" alt="Logo" width="35" height="30" className="d-inline-block align-text-top mx-2" />
            Gurkha Technology
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                    <NavLink className="nav-link" activeClassName="active" to="/attendance">
                      Attendance
                    </NavLink>
                  </li>
                  <li className="nav-item mx-1">
                    <NavLink className="nav-link" activeClassName="active" to="/internlist">
                      Intern Dashboard
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                  </li>
                </>
              )}
            </ul>
            {localStorage.getItem("user-info") ? (
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link btn btn-danger" onClick={logOut}>Logout</button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
