import React, { useState, useEffect } from 'react';
import InternDetails from './InternDetails';
import Spinner from './Spinner';
import Navbar from './Navbar';

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
    <Navbar/>
    <div className="container my-3">
    {loading ? (
            <Spinner />
          ) : (
            <>
        <div className="container d-flex flex-wrap justify-content-around bg-secondary rounded my-3">
          <button className="btn btn-sm btn-primary mx-3 my-1" key="frontend" onClick={() => filterItem('Frontend')}>Frontend</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="backend" onClick={() => filterItem('Backend')}>Backend</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="fullStack" onClick={() => filterItem('FullStack')}>FullStack</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="qa" onClick={() => filterItem('QA')}>QA</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="flutter" onClick={() => filterItem('Flutter')}>Flutter</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="wordpress" onClick={() => filterItem('WordPress')}>WordPress</button>
          <button className="btn btn-sm btn-primary mx-3 my-1" key="blockchain" onClick={() => filterItem('Blockchain')}>Blockchain</button>
          <button className="btn btn-sm btn-primary mx-3 my-1 ms-auto" key="all" onClick={() => filterItem('All')}>All</button>
        </div>
      
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {interndetails.map((element) => (
                <div className="col" key={element.id}>
                  <InternDetails
                    name={element.name}
                    category={element.category}
                    description={element.description}
                    image={element.image}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Intern;







