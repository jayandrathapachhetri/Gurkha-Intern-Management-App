import React from 'react'
// import Navbar from './Navbar'

let footerStyle = {
  
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%"
  }

function Footer() {
  return (
   
   <>
  <div className='container '>
    <footer className="container" style={{footerStyle}}>
      <hr className='featurette-divider' />
      <p className="text-end"><a className="style-none text-decoration-none text-dark" href="#"> <i className="bi bi-arrow-up-circle-fill h3"></i></a></p>
      <div className='row d-flex justify-content-between align-items-center'>
        <p className='text-start fw-bold col-md-6 col-lg-3'>© 2023 Gurkhatech Company Inc.</p>
        <div className='col-md-6 col-lg-3 d-flex justify-content-end mb-3'>
          <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
          <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
          <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
          <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
        </div>
      </div>
    </footer>
  </div>
</>

    
    
  ) 
}

export default Footer


