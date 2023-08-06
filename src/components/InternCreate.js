import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from './Navbar';

// import './App.css';

const InternCreate = () => {
  const [id] = useState("");
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [college, collegechange] = useState("");
  const [address, addresschange] = useState("");
  const [role, rolechange] = useState("");
  const [startofdate, startofdatechange] = useState("");
  const [endofdate, endofdatechange] = useState("");
  const [active, activechange] = useState(true);
  const [namevalidation, valnamechange] = useState(false);
  const [emailvalidation, valemailchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      name,
      email,
      phone,
      college,
      address,
      role,
      startofdate,
      endofdate,
      active,
    };

    fetch("http://localhost:3000/intern", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/internlist");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <> <Navbar/>
    <div >
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container my-3" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 className="text-center mt-3">Intern Data Create</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name <span className="text-danger">*</span></label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valnamechange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {name.length === 0 && namevalidation && (
                        <span className="text-danger">
                          Enter the valid name
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email <span className="text-danger">*</span></label>
                      <input
                        required
                        value={email}
                        onMouseDown={(e) => valemailchange(true)}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control"
                      ></input>
                      {email.length === 0 && emailvalidation && (
                        <span className="text-danger">
                          {" "}
                          Enter the vaild email{" "}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => phonechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>College</label>
                      <input
                        value={college}
                        onChange={(e) => collegechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Address</label>
                        <input
                          value={address}
                          onChange={(e) => addresschange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Role <span className="text-danger">*</span></label>
                        <input
                        required
                          value={role}
                          onChange={(e) => rolechange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Joining Date <span className="text-danger">*</span></label>
                        <input
                          required
                          value={startofdate}
                          onChange={(e) => startofdatechange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Leaving Date</label>
                        <input
                          value={endofdate}
                          onChange={(e) => endofdatechange(e.target.value)}
                          className="form-control"
                        ></input>
                      </div>
                    </div>

                    <div className="col-lg-12 ">
                      <div className="form-check my-1">
                        <input
                          checked={active}
                          onChange={(e) => activechange(e.target.checked)}
                          type="checkbox"
                          className="form-check-input"
                        ></input>
                        <label className="form-check-label mt-1">Is Active</label>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <button className="btn btn-success" type="submit">
                          Save
                        </button>
                        {/* <Link to="/internlist" className="btn btn-success">
                          save
                        </Link> */}
                        <Link to="/internlist" className="btn btn-danger">
                          Back
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default InternCreate;
