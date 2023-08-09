import React, { useState } from "react";
 
function InternDetails({ name, category, description, image }) {
  // let {name, category, description, image} : props;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <>
    <div class="container">
      <div class="row">
        <div col-md-4>
          <div className="card d-flex justify-content-center align-items-center shadow-none p-3 mb-3 bg-light rounded">
            <img
              src={image}
              className="card-img-center image-fluid mt-2 rounded-circle"
              alt={name}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50",
                alignItems: "center",
              }}
            />
            <div className="card-body">
              <h4 className="card-title text-centre">{category}</h4>
              <h6 className="text-start ">{name}</h6>
              <p className="card-text text-start ">
                {showFullDescription ? description : description.slice(0, 100)}
              </p>
              {description.length > 100 && (
                <button
                  className="btn btn-sm btn-secondary text-end "
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default InternDetails;

