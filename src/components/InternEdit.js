import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar';
 
const InternEdit = () => {
  const { empid } = useParams();

  //const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/intern/"+empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        emailchange(resp.email);
        phonechange(resp.phone);
        collegechange(resp.college);
        addresschange(resp.address);
        rolechange(resp.role);
        startofdatechange(resp.startofdate);
        endofdatechange(resp.endofdate);
        activechange(resp.isactive);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  const [id, idchange] = useState("");
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
    const empdata = { id, name, email, phone, college, address, role, startofdate, endofdate, active};

    fetch("http://localhost:3000/intern/"+empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Update successfully");
        navigate("/internlist");
      })
      .catch((err) => { 
        console.log(err.message);
      });
  };
  return (
    <><Navbar/>
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form className="container mt-4" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title mt-3">
                <h2 className="text-center ">Intern Data Update</h2>
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
                      {name && name.length === 0 && namevalidation && (
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
                      {email && email.length === 0 && emailvalidation && (
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

                  <div className="col-lg-12 my-1">
                    <div className="form-check">
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
                        Update
                      </button>
                      <Link to="/internlist" className="btn btn-danger">
                        Back
                      </Link>
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

export default InternEdit;
