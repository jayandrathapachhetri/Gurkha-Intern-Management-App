import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
              Gurkha Intern Management App
              </h1>
              <p className="lead my-4">
                It is a responsive web application
                designed to streamline administrative activities within the
                company, catering specifically to all the interns. This app
                offers a range of essential features to enhance efficiency and
                improve overall management.
              </p>
              <Link
                className="btn btn-primary btn-md lead"
                to="/about"
                role="button"
              >
                Learn more
              </Link>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="Images/humanresource.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <Carousel fade>
            <h2 className="text-center">
              Become a part of
              <span className="text-warning"> Gurkha Techology </span>
            </h2>
            <Carousel.Item>
              <img src="Images/home1.jpg" className="d-block w-100" alt="..." />
              <Carousel.Caption>
                <h2>Intern Details</h2>
                <p className="lead fw-bold">
                  Easily manage intern profiles by creating, reading, updating,
                  and deleting their information. The app provides a
                  user-friendly interface to handle intern data effectively.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="Images/home2.jpg" className="d-block w-100" alt="..." />
              <Carousel.Caption>
                <h2>Categorization and Filtering</h2>
                <p className="lead fw-bold">
                  {" "}
                  Efficiently categorize interns based on their roles. Use
                  filters to quickly access specific groups with their detail
                  informantion, simplifying the tracking process.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="Images/home3.jpg" className="d-block w-100" alt="..." />
              x
              <Carousel.Caption>
                <h2>Attendance System</h2>
                <p className="lead bolder fw-bold">
                  Automate the attendance tracking for interns, eliminating the
                  need for manual records. Admin can mark daily attendance
                  through the app, and can monitor attendance records in
                  real-time.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

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
