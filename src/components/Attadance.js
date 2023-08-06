import React, { useState, useEffect } from 'react';
import AttadanceDetails from './AttadanceDetails';
import Navbar from './Navbar';

function Attadance() {
  const [interndetails, setInternDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/interndetails";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setInternDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error); 
      }
    };

    fetchData();
  }, []);

  
  return (
    <> <Navbar/>
      <div className="container text-center ">
        
        <h2 className='my-3'>Intern Attendance</h2> 
        <table className="table table-bordered table-striped">
          <thead className='table-dark'>
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
                <AttadanceDetails
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
    </>
  );
}

export default Attadance;

