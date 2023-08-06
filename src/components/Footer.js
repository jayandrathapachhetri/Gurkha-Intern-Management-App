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
    
    <footer class="container" style={footerStyle}>
    <hr className='featurette-divider'/>
      <p class="text-end"><a className="style-none text-decoration-none"  href="#">Back to top</a></p>
      <p className='text-start fw-bold'> © 2023 Gurkhatech Company Inc.</p>
      
    </footer>
    </div>
    </>
  )
}

export default Footer


