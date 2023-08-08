// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'
// import {  NavDropdown } from "react-bootstrap";

// function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user-info"));
//   console.warn(user);

//   const navigate = useNavigate();
//   function logout() {
//     localStorage.removeItem('user-info');
//     // localStorage.clear();
//     navigate("/login");
//   }


//   return (
//     <>
//     <div className="container-fluid">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pills" style={{backgroundColor:'#e3f2fd'}}>
//   <div className="container-fluid">
//   <a class="navbar-brand" href="#">
//       <img src="/favicon-32x32.png" alt="Logo" width="35" height="30" className="d-inline-block align-text-top mx-2"/>
//       Gurkha Technology
//     </a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       {localStorage.getItem("user-info") ? (
//           <>
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/About">About</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/interndetails">Intern Details</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/attadance">Attadance</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/internlist">Intern DashBoard</a>
//         </li>
//         </>) : (<>
//         {/* <li className="nav-item">
//         <Link  className="nav-link mx-1" to="/register" >Register</Link>
//         </li> */}
//         <li className="nav-item">
//         <Link className="nav-link mx-1" to="/login" >Log in</Link>
//         </li>
//         </>)}
//       </ul>
//       {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form> */}
//     </div>
//   </div>
//   {localStorage.getItem("user-info")  ? (
//           // <Nav>
//             <NavDropdown title={user && user.name} style={{ 
//             backgroundColor: "gray",
//             // border: "1px solid black",
//             borderRadius: "5px"}}>
//               <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
//               <NavDropdown.Item>Profile</NavDropdown.Item>
//             </NavDropdown>
//           // </Nav>
//          ) : null} 
// </nav>
// </div>
//     </>
//   )
// }

// export default Navbar


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
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-pills" style={{ backgroundColor:'#e3f2fd' }}>
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
            <NavDropdown title={user && user.name} style={{ backgroundColor: "gray", borderRadius: "5px" }}>
              <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </NavDropdown>
          ) : null} 
        </nav>
      </div>
    </>
  );
}

export default Navbar;
