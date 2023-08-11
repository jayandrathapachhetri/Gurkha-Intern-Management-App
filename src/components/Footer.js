import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-light text-dark py-4">
      <div className="container">
        <hr className="featurette-divider" />
        <p className="text-end mb-2">
          <a className="text-dark" href="#">
            <i className="bi bi-arrow-up-circle-fill h3"></i>
          </a>
        </p>
        <div className="row d-flex justify-content-between align-items-center">
          <p className="text-center text-md-start fw-bold col-md-6 col-lg-3 mb-md-0">
            © 2023 Gurkhatech Company Inc.
          </p>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end mb-3">
            <Link to="#"><i className="bi bi-twitter text-dark mx-2"></i></Link>
            <Link to="#"><i className="bi bi-facebook text-dark mx-2"></i></Link>
            <Link to="#"><i className="bi bi-linkedin text-dark mx-2"></i></Link>
            <Link to="#"><i className="bi bi-instagram text-dark mx-2"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
