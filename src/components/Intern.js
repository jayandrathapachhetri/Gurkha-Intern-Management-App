// import React, { useState, useEffect } from 'react';
// import InternDetails from './InternDetails';
// import Spinner from './Spinner';

// function Intern() {
//   const [interndetails, setInterndetails] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching data...");
//         let url = "http://localhost:3000/interndetails";
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//         setInterndetails(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Set loading to false even on error
//       }
//     };

//     fetchData();
//   }, []);

//   const filterItem = (roleItem) => {
//     const updatedItems = interndetails.filter((curElem)=>{
//       return curElem.category === roleItem;
//     });
//     setInterndetails(updatedItems);
//   }

//   return (
//     <>
//     <div className="container d-flex justify-content-center">
//     <button className="btn" onClick={()=>filterItem('Frontend')}>Frontend</button>
//     <button className="btn" onClick={()=>filterItem('Backend')}>Backend</button>
//     <button className="btn" onClick={()=>filterItem('QA')}>QA</button>
//     <button className="btn" onClick={()=>filterItem('Flutter')}>Flutter</button>
//     <button className="btn" onClick={()=>setItems(Info)}>All</button>
// </div>
//     <div className="container my-3">
//       <h2 className="py-3 text-center">Intern Detail</h2>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="row">
//           {interndetails.map((element) => {
//             return (
//               <div className="col-md-4" key={element.id}>
//                 <InternDetails
//                   name={element.name}
//                   category={element.category}
//                   description={element.description}
//                   image={element.image}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//     </>
//   );
// }


// export default Intern;

import React, { useState, useEffect } from 'react';
import InternDetails from './InternDetails';
import Spinner from './Spinner';
// import { Link } from 'react-router-dom';

function Intern() {
  const [interndetails, setInterndetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/interndetails";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setInterndetails(data);
        setOriginalData(data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  const filterItem = (roleItem) => {
    if (roleItem === "All") {
      setInterndetails(originalData);
    } else {
      const updatedItems = originalData.filter((curElem) => {
        return curElem.category === roleItem;
      });
      setInterndetails(updatedItems);
    }
  };

  return (
    <>
        <div className=" container d-flex flex-wrap bg-secondary rounded my-2">
          <button className="btn btn-sm btn-primary mx-3 my-1" key="frontend" onClick={() => filterItem('Frontend')}>Frontend</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="backend" onClick={() => filterItem('Backend')}>Backend</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="fullStack" onClick={() => filterItem('FullStack')}>FullStack</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="qa" onClick={() => filterItem('QA')}>QA</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="flutter" onClick={() => filterItem('Flutter')}>Flutter</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="wordpress" onClick={() => filterItem('WordPress')}>WordPress</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="blockchain" onClick={() => filterItem('Blockchain')}>Blockchain</button>
          <button className="btn btn-sm btn-primary mx-3 my-1 ms-auto" key="all" onClick={() => filterItem('All')}>All</button>
        </div>
      
      <div className="container my-3">
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {interndetails.map((element) => {
              return (
                <div className="col-md-4" key={element.id}>
                  <InternDetails
                    name={element.name}
                    category={element.category}
                    description={element.description}
                    image={element.image}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Intern;
