import React, {useState, useEffect} from 'react';
// import { Button } from 'react-bootstrap';
import Navbar from './Navbar';

import { useNavigate} from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [emailvalidation, setEmailvalidation] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
 

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);

  async function signup() {
    console.log('data', name, email, password);
    let item = { name, email, password };

    let result =  await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
      console.log("result",result)
      alert("Sign Up Done")
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/");
  }

  return (
    <> <Navbar/>
    <div className="d-flex justify-content-center align-items-center vh-100 signupPage">
        <div className="p-3 rounded w-25 border signupForm">
          <h2>
            <strong>Gurkha Intern</strong>
          </h2>
          <form className='text-start'>
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                // id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onMouseDown={(e) => setEmailvalidation(true)}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {email.length === 8 && emailvalidation && (
                        <span className="text-danger">
                          {" "}
                          Enter the vaild email{" "}
                        </span>
                        )}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
               </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                // id="exampleInputPassword1"
              />
            </div>
            
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                // id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Create New Account
              </label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={signup} >
              Register
            </button>
          </form> 
        </div>
      </div>
    </>
  )
}

export default Register;




