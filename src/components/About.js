import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row col">
          <div className="container mt-4">
            <div className="row featurette align-items-center">
              <div className="col-lg-5">
                <img
                  className="img-fluid rounded"
                  src="/Images/about-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <h2 className="featurette-heading">
                  Intern Details (Create, Read, Update, Delete)
                </h2>
                <p className="lead">
                  This feature allows the admin to easily manage and maintain
                  detailed profiles of all the interns. The app provides an
                  intuitive user interface, enabling the admin to create new
                  intern profiles by capturing essential information such as
                  name, contact details, position, and start date. It also
                  allows the admin to view, update, or delete intern records
                  whenever necessary. By providing this CRUD functionality, the
                  app ensures that intern data is always up-to-date and easily
                  accessible.
                </p>
              </div>
            </div>
            <div className="row featurette align-items-center mb-5">
              <div className="col-lg-5 order-lg-2">
                <img
                  className="img-fluid rounded"
                  src="/Images/about-2.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7 order-lg-1">
                <h2 className="featurette-heading">
                  Categorization and Filtering
                </h2>
                <p className="lead">
                  The app offers a dynamic categorization system to classify
                  interns based on their respective roles and expertise areas.
                  Interns can be tagged under categories such as frontend,
                  backend, flutter, QA, blockchain, full stack, etc. This
                  categorization simplifies the process of locating specific
                  groups of interns, allowing the admin to efficiently manage
                  and monitor interns based on their roles and responsibilities.
                </p>
              </div>
            </div>
            <div className="row featurette align-items-center mb-5">
              <div className="col-lg-5">
                <img
                  className="img-fluid rounded"
                  src="/Images/about-3.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <h2 className="featurette-heading">Attendance System</h2>
                <p className="lead">
                  One of the core functionalities of the app is the automated
                  Attendance System. Interns can conveniently mark their daily
                  attendance through the app, eliminating the need for manual
                  attendance tracking. Each intern's attendance data is recorded
                  in real-time and can be instantly viewed by the admin. The
                  attendance system helps ensure punctuality, provides
                  transparency, and enables the admin to monitor intern
                  attendance effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
