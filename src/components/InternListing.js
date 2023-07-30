import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
// import "./App.css";
import Navbar from './Navbar';


const InternListing = () => {
  const [empdata, empdatachange] = useState([]);
  const navigate = useNavigate();

  // href is use so no need of navigate 
  // const LoadDetail = (id) => {
  //   navigate("/employee/detail/" +id);
  // };

  // const LoadEdit = (id) => {
  //   navigate("/employee/edit/" +id);
  // };

  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3000/intern/" +id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          //refreah our page
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/intern`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <> <Navbar/>
    <div className="container mt-3">
      <div className="card">
        <div className="card-title">
          <h2>Intern Lists</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/internlist/interncreate" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
              <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>College</td>
                <td>Address</td>
                <td>Role</td>
                <td>Joining Date</td>
                <td>Leaving Date</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.college}</td>
                    <td>{item.address}</td>
                    <td>{item.role}</td>
                    <td>{item.startofdate}</td>
                    <td>{item.endofdate}</td>
                    <td>
                      <a
                        href={"/internlist/internedit/"+item.id}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        // href="remove"
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                         href={"/internlist/interninfo/"+item.id}
                        className="btn btn-primary"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default InternListing;
