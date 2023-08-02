// import React from "react";
// import Navbar from "./Navbar";
// import Carousel from "react-bootstrap/Carousel";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-10">
//         <div className="row">
//           <div className="col-4">
//             <div className="jumbotron">
//               <h1 className="display-4">Gurkha Technology</h1>
//               <p className="lead">
//                 Welcome to Gurkha Technology, a leading digital marketing agency and
//                 technology solutions provider based in Nepal.
//               </p>
//               <p className="lead">
//                 <Link className="btn btn-primary btn-md" to="/about" role="button">
//                   Learn more
//                 </Link>
//               </p>
//             </div>
//           </div>
//           <div className="col-8">
//             <Carousel fade>
//               <Carousel.Item>
//                 <img src="Images/home1.jpg" className="d-block w-100" alt="..." />
//                 <Carousel.Caption>
//                   <h3>First slide label</h3>
//                   <p className="lead">
//                     Digital Marketing Strategy and Consulting in Nepal.
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img src="Images/home2.jpg" className="d-block w-100" alt="..." />
//                 <Carousel.Caption>
//                   <h3>Second slide label</h3>
//                   <p className="lead">Online Advertising and Promotion in Nepal.</p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img src="Images/home3.jpg" className="d-block w-100" alt="..." />
//                 <Carousel.Caption>
//                   <h3>Third slide label</h3>
//                   <p className="lead">
//                     Website Development and Optimization in Nepal
//                   </p>
//                 </Carousel.Caption>
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

// {
//   /* <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
//       <img src="Images/Home.jpg" alt="Home" className="img-fluid" />
//     </div> */
// }

import React from "react";
import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center mt-10">
        <div className="row  ">
          <div className="jumbotron col-4">
            <h1 className="display-4">Gurkha Technology</h1>
            <p className="lead">
              Welcome to Gurkha Technology, a leading digital marketing agency and
              technology solutions provider based in Nepal.
            </p>
            <p className="lead">
              <Link className="btn btn-primary btn-lg" to="/about" role="button">
                Learn more
              </Link>
            </p>
          </div>
          <div className="col-8">
            <Carousel fade>
              <Carousel.Item>
                <img src="Images/home1.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p className="lead">
                    Digital Marketing Strategy and Consulting in Nepal.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/home2.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p className="lead">Online Advertising and Promotion in Nepal.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/home3.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p className="lead">
                    Website Development and Optimization in Nepal
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      {/* <div className="container">
      <div class="row">
          <div class=" border col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Heading</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div>
        </div>
        </div> */}
    </>
  );
}

export default Home;
