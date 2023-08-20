import React from 'react'
import { Link } from 'react-router-dom' 

function Error() {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className="row">
        <div className="col text-center">
          <img src="Images/error.svg" alt="error" />
        </div>
        <div className='Button'>
        <Link to="/" className="btn btn-lg btn-primary mt-3">Go Back</Link>
        </div>
      </div>
    </div>
  )
}

export default Error

