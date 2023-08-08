import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { useNavigate} from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailvalidation, setEmailvalidation] = useState(false);
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, [navigate]);

  async function signUp() {
    console.log('data', name, email, password);
    let item = { name, email, password };

    let result =  await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
      console.log("result",result)
      alert("The user is register.")
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/login");
  }

  return (
    <> <Navbar/>
    <div className="d-flex justify-content-center align-items-center vh-100">
    {/* style={{ 
      backgroundImage: `url("Images/internlogin.jpg")`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} */}
        <div className="p-3 rounded w-25 border bg-info">
          <h2>
            <strong>Gurkha Intern</strong>
          </h2>
          <form className='text-start' onSubmit={signUp}>
          <div className="form-group">
              <label htmlFor="name">Name <span className="text-danger">*</span></label>
              <input
                required
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address <span className="text-danger">*</span></label>
              <input
                required
                type="email"
                value={email}
                onMouseDown={(e) => setEmailvalidation(true)}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                aria-describedby="emailHelp"
                id='email'
              />
              {email.length === 8 && emailvalidation && (
                        <span className="text-danger">
                          {" "}
                          Enter the vaild email{" "}
                        </span>
                        )}
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
               </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password <span className="text-danger">*</span></label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
              />
            </div>
            
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Create New Account
              </label>
            </div>
            <button type="submit" className="btn btn-primary"  >
              Register
            </button>
          </form> 
        </div>
      </div>
    </>
  )
}

export default Register;




