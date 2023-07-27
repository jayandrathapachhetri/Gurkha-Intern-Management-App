import React from 'react'

function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light" style={{backgroundColor:'#e3f2fd'}}>
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="/favicon-32x32.png" alt="Logo" width="35" height="30" class="d-inline-block align-text-top mx-2"/>
      Gurkha
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/interndetails">Intern Details</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/internlist">Intern DashBoard</a>
        </li>
      </ul>
      {props.search?  <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> : ""}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
