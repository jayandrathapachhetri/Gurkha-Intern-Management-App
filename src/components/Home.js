import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row col">
          <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-sm-start">
            <div className="container mt-4">
              <div className="d-sm-flex align-items-center justify-content-between">
                <div className="mb-4">
                  <h1 className="display-3">Gurkha Intern Management App</h1>
                  <p className="lead my-4">
                    A responsive web application designed to streamline
                    administrative activities for interns. This app offers
                    essential features to enhance efficiency and improve
                    management.
                  </p>
                  <Link
                    className="btn btn-primary btn-lg text-center"
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
            <h2 className="text-center mt-md-3 my-lg-5 d-none d-md-block">
              Become a part of
              <span className="text-warning"> Gurkha Techology </span>
            </h2>
          </section>

          <section className="bg-light text-dark  text-center text-sm-start">
            <div className="container d-none d-sm-block">
              <Carousel fade>
                <Carousel.Item>
                  <img
                    src="Images/home1.jpg"
                    className="d-block w-100 image-fluid rounded"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h2>Intern Details</h2>
                    <p className="lead fw-normal">
                      Manage intern profiles with ease. Create, read, update,
                      and delete their information. The app provides a
                      user-friendly interface to handle intern data effectively.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="Images/home2.jpg"
                    className="d-block w-100 image-fluid rounded"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h2>Categorization and Filtering</h2>
                    <p className="lead fw-normal">
                      Categorize interns based on roles and use filters to
                      access specific groups quickly. Simplify tracking and
                      management with detailed information.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="Images/home3.jpg"
                    className="d-block w-100 image-fluid rounded"
                    alt="..."
                  />
                  <Carousel.Caption>
                    <h2>Attendance System</h2>
                    <p className="lead fw-normal">
                      Automate attendance tracking for interns. Admins can mark
                      daily attendance and monitor records in real-time,
                      improving punctuality and transparency.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
