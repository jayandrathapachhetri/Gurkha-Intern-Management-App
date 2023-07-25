import React from "react";

function InternDetails({ name, category, description, image }) {
  // let {name, category, description, image} : props;
  return (
    <div class="container text-start">
      <div class="row">
        <div col-md-4>
          <div className="card">
            <img src={image} className="card-img image-fluid" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{category}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternDetails;
