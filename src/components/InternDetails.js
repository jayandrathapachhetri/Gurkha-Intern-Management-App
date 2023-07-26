import React, {useState} from "react";

function InternDetails({ name, category, description, image }) {
  // let {name, category, description, image} : props;
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription((prev) => !prev);
  };

  return (
    <div class="container text-start ">
      <div class="row" >
        <div col-md-4 >
          <div className="card" >
            <img src={image} className="card-img image-fluid" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{category}</h5>
              <p className="card-text">
                {showFullDescription ? description : description.slice(0, 100)}
              </p>
              {description.length > 100 && (
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? 'See Less' : 'See More'}
                </button>
              )}
              {/* <a href="#" className="btn btn-sm btn-secondary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternDetails;

// import React from "react";

// function InternDetails({ name, category, description, image }) {
//   // let {name, category, description, image} : props;
//   return (
//     <div class="container text-start">
//       <div class="row">
//         <div col-md-4>
//           <div className="card">
//             <img src={image} className="card-img image-fluid" alt={name} />
//             <div className="card-body">
//               <h5 className="card-title">{category}</h5>
//               <p className="card-text">{description}</p>
//               <a href="#" className="btn btn-sm btn-secondary">
//                 Go somewhere
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InternDetails;

