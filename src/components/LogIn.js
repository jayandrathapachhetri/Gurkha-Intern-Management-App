import React, {useState, useEffect} from 'react';

import Navbar from './Navbar';
 
import { useNavigate} from "react-router-dom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/");
    }
  }, [navigate]);

  async function login() {
    console.log('data', email, password);
    let item = { email, password };

    let result =  await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
      console.log("result",result)
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
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                // id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
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
                Check me out
              </label>
            </div>
            <button 
              type="submit" className="btn btn-primary" onClick={login} >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default LogIn;


