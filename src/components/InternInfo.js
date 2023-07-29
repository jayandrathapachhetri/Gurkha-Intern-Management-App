import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InternInfo = () => {
  const { empid } = useParams();
  // empty object
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/intern/" + empid)
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
    <div className="container mt-3 text-start">
      <div className="card">
        <div className="card-title text-center">
          <h2>Intern Information</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Information</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>ID</th>
                <td>{empdata.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{empdata.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{empdata.email}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{empdata.phone}</td>
              </tr>
              <tr>
                <th>College</th>
                <td>{empdata.college}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{empdata.address}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{empdata.role}</td>
              </tr>
              <tr>
                <th>Joining Date</th>
                <td>{empdata.startofdate}</td>
              </tr>
              <tr>
                <th>Leaving Date</th>
                <td>{empdata.endofdate}</td>
              </tr>
            </tbody>
          </table>
          <Link className="btn btn-danger" to="/internlist">
            Back to Listing
          </Link>
        </div>
      </div>
    </div>
  );
};
export default InternInfo;
