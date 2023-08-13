// import { useEffect, useState } from "react";
// import { Link} from "react-router-dom";
// import Navbar from './Navbar';


// const InternListing = () => {
//   const [empdata, empdatachange] = useState([]);

//   const Removefunction = (id) => {
//     if (window.confirm("Do you want to remove?")) {
//       fetch("http://localhost:3000/intern/" +id, {
//         method: "DELETE",
//       })
//         .then((res) => {
//           alert("Removed successfully.");
//           //refreah our page
//           window.location.reload();
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
//   };

//   useEffect(() => {
//     fetch(`http://localhost:3000/intern`)
//       .then((res) => {
//         return res.json();
//       })
//       .then((resp) => {
//         empdatachange(resp);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, []);
//   return (
//     <> <Navbar/>
//     <div className="container mt-5">
//       <div className="row">
//         <div className="offset-lg-1 col-lg-10">
//     <div className="container mt-4">
//       <div className="card">
//         <div className="card-title mt-3">
//           <h2 className="text-center">Intern Lists</h2>
//         </div>
//         <div className="card-body">
//         <div className="table-responsive">
//           <div className="divbtn mb-1">
//             <Link to="/internlist/interncreate" className="btn btn-success">
//               Add New (+)
//             </Link>
//           </div>
//           <table className="table table-bordered table-striped">
//             <thead className="table-dark">
//               <tr table-dark>
//               <td>ID</td>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>College</th>
//                 <th>Address</th>
//                 <th>Role</th>
//                 <th>Joining Date</th>
//                 <th>Leaving Date</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {empdata &&
//                 empdata.map((item) => (
//                   <tr key={item.id} className="align-middle">
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.email}</td>
//                     <td>{item.phone}</td>
//                     <td>{item.college}</td>
//                     <td>{item.address}</td>
//                     <td>{item.role}</td>
//                     <td>{item.startofdate}</td>
//                     <td>{item.endofdate}</td>
//                     <td d-flex justify-content-around>
//                       <Link
//                         to={"/internlist/internedit/"+item.id}
//                         className="btn btn-success"
//                       >
//                         Edit
//                       </Link>
//                       <Link
//                         onClick={() => {
//                           Removefunction(item.id);
//                         }}
//                         className="btn btn-danger"
//                       >
//                         Remove
//                       </Link>
//                       <Link
//                          to={"/internlist/interninfo/"+item.id}
//                         className="btn btn-primary"
//                       >
//                         Detail
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default InternListing;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from './Navbar';

// const InternListing = () => {
//   const [empdata, setEmpdata] = useState([]);

//   const fetchEmpdata = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/intern");
//       const data = await response.json();
//       setEmpdata(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const removeItem = (id) => {
//     if (window.confirm("Do you want to remove?")) {
//       fetch("http://localhost:3000/intern/" + id, {
//         method: "DELETE",
//       })
//         .then(() => {
//           alert("Removed successfully.");
//           fetchEmpdata(); // Refresh the data
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
//   };

  // useEffect(() => {
  //   fetchEmpdata();
  // }, []);


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const InternListing = () => {
  const [empdata, setEmpdata] = useState([]);

  const fetchEmpdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/intern");
      const data = await response.json();
      setEmpdata(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeItem = async (id) => {
    if (window.confirm("Do you want to remove?")) {
      try {
        await fetch("http://localhost:3000/intern/" + id, {
          method: "DELETE",
        });

        // Refresh the data after successful deletion
        fetchEmpdata();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const updateRemainingIDs = async () => {
    // Create an array of updated items with sequential IDs
    const updatedData = empdata.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    try {
      // Send a PUT or PATCH request to update the IDs on the server
      await fetch("http://localhost:3000/intern", {
        method: "PUT", // Use the appropriate HTTP method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      // Refresh the data after successful update
      fetchEmpdata();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchEmpdata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="offset-0 col">
            <div className="container mt-4">
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
                        <tr>
                          <th>ID</th>
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
                        {empdata.map((item, index) => (
                          <tr key={index} className="align-middle">
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.college}</td>
                            <td>{item.address}</td>
                            <td>{item.role}</td>
                            <td>{item.startofdate}</td>
                            <td>{item.endofdate}</td>
                            <td className="d-flex justify-content-around">
                              <Link
                                to={"/internlist/internedit/" + item.id}
                                className="btn btn-success"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="btn btn-danger"
                              >
                                Remove
                              </button>
                              <Link
                                to={"/internlist/interninfo/" + item.id}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default InternListing;


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from './Navbar';

// const InternListing = () => {
//   const [empdata, setEmpdata] = useState([]);

//   const fetchEmpdata = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/intern");
//       const data = await response.json();

//       // Add index property to each item
//       const dataWithIndex = data.map((item, index) => ({
//         ...item,
//         index: index + 1,
//       }));

//       setEmpdata(dataWithIndex);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const removeItem = async (id) => {
//     if (window.confirm("Do you want to remove?")) {
//       try {
//         await fetch("http://localhost:3000/intern/" + id, {
//           method: "DELETE",
//         });

//         // Refresh the data after successful deletion
//         fetchEmpdata();
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchEmpdata();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <div className="row">
//           <div className="offset-lg-1 col-lg-10">
//             <div className="container mt-4">
//               <div className="card">
//                 <div className="card-title mt-3">
//                   <h2 className="text-center">Intern Lists</h2>
//                 </div>
//                 <div className="card-body">
//                   <div className="table-responsive">
//                     <div className="divbtn mb-1">
//                       <Link to="/internlist/interncreate" className="btn btn-success">
//                         Add New (+)
//                       </Link>
//                     </div>
//                     <table className="table table-bordered table-striped">
//                       <thead className="table-dark">
//                         <tr>
//                           <th>ID</th>
//                           <th>Name</th>
//                           <th>Email</th>
//                           <th>Phone</th>
//                           <th>College</th>
//                           <th>Address</th>
//                           <th>Role</th>
//                           <th>Joining Date</th>
//                           <th>Leaving Date</th>
//                           <th>Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {empdata.map((item) => (
//                           <tr key={item.id} className="align-middle">
//                             <td>{item.index}</td>
//                             <td>{item.name}</td>
//                             <td>{item.email}</td>
//                             <td>{item.phone}</td>
//                             <td>{item.college}</td>
//                             <td>{item.address}</td>
//                             <td>{item.role}</td>
//                             <td>{item.startofdate}</td>
//                             <td>{item.endofdate}</td>
//                             <td className="d-flex justify-content-around">
//                               <Link
//                                 to={"/internlist/internedit/" + item.id}
//                                 className="btn btn-success"
//                               >
//                                 Edit
//                               </Link>
//                               <button
//                                 onClick={() => removeItem(item.id)}
//                                 className="btn btn-danger"
//                               >
//                                 Remove
//                               </button>
//                               <Link
//                                 to={"/internlist/interninfo/" + item.id}
//                                 className="btn btn-primary"
//                               >
//                                 Detail
//                               </Link>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default InternListing;
