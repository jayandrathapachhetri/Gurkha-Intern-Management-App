import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate('/');
    }
  }, [navigate]);

  async function signUp(e) {
    e.preventDefault();
    if (!emailValidation) {
      setValidEmail(false);
      return;
    }

    if (!passwordValidation) {
      setValidPassword(false);
      return;
    }

    console.log('data', name, email, password);
    let item = { name, email, password };

    let result = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log('result', result);
    localStorage.setItem('user-info', JSON.stringify(result));
    navigate('/');
  }

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValidation(validateEmail(newEmail));
    setValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValidation(newPassword.length >= 6);
    setValidPassword(true);

    const hasUppercase = /[A-Z]/.test(newPassword);
    const hasLowercase = /[a-z]/.test(newPassword);
    const hasDigit = /\d/.test(newPassword);

    setPasswordValidation(hasUppercase && hasLowercase && hasDigit);
    setValidPassword(true);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center vh-100 signupPage">
        <div className="p-3 rounded w-25 border signupForm bg-info">
          <h2>
            <strong>Gurkha Intern</strong>
          </h2>
          <form className="text-start" onSubmit={signUp}>
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
              <label htmlFor="exampleInputEmail1">
                Email address <span className="text-danger">*</span>
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                className={`form-control ${
                  !validEmail ? 'is-invalid' : ''
                }`}
              />
              {!validEmail && (
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              )}
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">
                Password <span className="text-danger">*</span>
              </label>
              <input
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className={`form-control ${
                  !validPassword ? 'is-invalid' : ''
                }`}
              />
              {!validPassword && (
                <div className="invalid-feedback">
                  Password should be at least 6 characters long and contain
                  at least one uppercase letter, one lowercase letter, and one digit.
                </div>
              )}
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label" htmlFor="exampleCheck1">
              Create New Account
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
