import React from 'react'
import Navbar from './Navbar';
 

function Home() {

  return (
    <>
    <Navbar/>
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <img src="Images/Home.jpg" alt="Home" className="img-fluid" />
    </div>
    </>
    
  )
}

export default Home
