import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InternInfo = () => {
  const { empid } = useParams();
  // empty object
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/intern/" +empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        // console.log(empdata)
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  return (
    <div className="mt-2">
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Intern Information</h2>
          </div>
          <div className="card-body"></div>

          {empdata && (
            <div>
              <h2>
                The Intern name is : <b>{empdata.name}</b> (id : {empdata.id})
              </h2>
              <h3>Contact Details</h3>
              <h5>Email is : {empdata.email}</h5>
              <h5>Phone is : {empdata.phone}</h5>
              <h5>College is : {empdata.college}</h5>
              <h5>Address is : {empdata.address}</h5>
              <h5>Role is : {empdata.role}</h5>
              <h5>Joining Date is : {empdata.startofdate}</h5>
              <h5>Leaving Date is : {empdata.endofdate}</h5>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>
          )}
        </div>
      </div>
    </div> 
  );
}
export default InternInfo;


