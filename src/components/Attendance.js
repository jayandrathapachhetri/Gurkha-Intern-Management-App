import React, { useState, useEffect } from "react";
import AttendanceDetails from "./AttendanceDetails";
import Navbar from "./Navbar";
import Spinner from './Spinner';

function Attendance() {
  const [interndetails, setInternDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/interndetails";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setInternDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      <Navbar />
      <div className="container my-3">
      {loading ? (
          <Spinner />
        ) : (
        <div className="card">
          <div className="card-title text-center mt-3">
            <h2>Intern Attendance</h2>
          </div>
          <div className="card-body">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Present Day</th>
                  <th scope="col">Absent Day</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {interndetails.map((intern) => (
                  <tr key={intern.id}>
                    <AttendanceDetails
                      id={intern.id}
                      name={intern.name}
                      present={intern.present_day}
                      absent={intern.absent_day}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    </>
  );
}

export default Attendance;
