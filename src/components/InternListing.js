import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Navbar from './Navbar';


const InternListing = () => {
  const [empdata, empdatachange] = useState([]);

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
    <div className="container my-3">
      <div className="card">
        <div className="card-title mt-3">
          <h2 className="text-center">Intern Lists</h2>
        </div>
        <div className="card-body">
        <div className="table-responsive">
          <div className="divbtn mb-1">
            <Link to="/internlist/interncreate" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr table-dark>
              <td>ID</td>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>College</th>
                <th>Address</th>
                <th>Role</th>
                <th>Joining Date</th>
                <th>Leaving Date</th>
                <th>Action</th>
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
                    <td d-flex justify-content-around>
                      <Link
                        to={"/internlist/internedit/"+item.id}
                        className="btn btn-success"
                      >
                        Edit
                      </Link>
                      <Link
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </Link>
                      <Link
                         to={"/internlist/interninfo/"+item.id}
                        className="btn btn-primary"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default InternListing;
