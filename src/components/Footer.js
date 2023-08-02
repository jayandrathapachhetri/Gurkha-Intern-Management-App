import React from 'react'
// import Navbar from './Navbar'

let footerStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    // backgroundColor: "#343a40",
    // color: "white",
    padding: "5px",
    textAlign: "center",
    // marginTop: "20px",
  };

function Footer() {
  return (
    <> 
    <div className='container'>
    <hr className='featurette-divider'/>
    <footer class="container" style={footerStyle}>
      <p class="text-end"><a className="style-none text-decoration-none"  href="#">Back to top</a></p>
      <p className='text-start'> © 2023 Gurkhatech Company Inc. <p className='text-center'>All rights reserved.  - Privacy Terms- </p> </p>  
      
    </footer>
    </div>
    </>
  )
}

export default Footer


