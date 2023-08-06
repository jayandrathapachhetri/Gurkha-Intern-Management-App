import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      
      <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
  <div className="container">
    <div className="d-sm-flex align-items-center justify-content-between">
      <div>
        <h1>
          Become a <span className="text-warning"> Web Developer </span>
        </h1>
        <p className="lead my-4">
        Gurkha Intern Management App is a responsive web application designed to streamline administrative activities within the company, catering specifically to all the interns. This app offers a range of essential features to enhance efficiency and improve overall management.
        </p>
        <Link className="btn btn-primary btn-md lead" to="/about" role="button">
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
