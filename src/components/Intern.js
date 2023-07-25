import React, { useState, useEffect } from 'react';
import InternDetails from './InternDetails';
import Spinner from './Spinner';

function Intern() {
  const [interndetails, setInterndetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        let url = "http://localhost:3000/interndetails";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        setInterndetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container my-3">
      <h2 className="py-3 text-center">Intern Detail</h2>
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
  );
}

export default Intern;

