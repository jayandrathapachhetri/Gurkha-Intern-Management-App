import React from "react";
import Navbar from "./Navbar";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">Gurkha Technology</h1>
            <p className="lead">
              Welcome to Gurkha Technology, a leading digital marketing agency and
              technology solutions provider based in Nepal.
            </p>
            <p className="lead">
              <Link className="btn btn-primary btn-md" to="/about" role="button">
                Learn more
              </Link>
            </p>
          </div>
          <div >
            <Carousel fade>
              <Carousel.Item>
                <img src="Images/home1.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                  <h2>Intern Details</h2>
                  <p className="lead fw-bold">Easily manage intern profiles by creating, reading, updating, and deleting their information. The app provides a user-friendly interface to handle intern data effectively.</p>
                  
      
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/home2.jpg" className="d-block w-100" alt="..." />
                <Carousel.Caption>
                  <h2>Categorization and Filtering</h2>
                  <p className="lead fw-bold"> Efficiently categorize interns based on their roles. Use filters to quickly access specific groups with their detail informantion, simplifying the tracking process.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src="Images/home3.jpg" className="d-block w-100" alt="..." />x
                <Carousel.Caption>
                  <h2>Attendance System</h2>
                  <p className="lead bolder fw-bold">
                  Automate the attendance tracking for interns, eliminating the need for manual records. Admin can mark daily attendance through the app, and can monitor attendance records in real-time.
                  </p>  
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
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
