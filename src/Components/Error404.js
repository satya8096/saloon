// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="container text-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h1 className="display-1 fw-bold text-warning">404</h1>
            <h2 className="text-dark mb-3 fw-bold">Page Not Found</h2>
            <p className="text-muted mb-4">
              Sorry, the page you're looking for doesn't exist or has been
              moved.
            </p>
            <div className="d-flex justify-content-center justify-content-center gap-3 flex-wrap">
              <Link to="/" className="btn btn-dark px-4">
                Go to Home
              </Link>
              <Link to="/book" className="btn btn-warning text-white px-4">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
