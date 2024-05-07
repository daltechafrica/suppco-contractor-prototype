import React from "react";
import splashImage from "../assets/images/landing/splash.svg"
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Splash() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center m-auto" style={{ height: "100vh" }}>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <img src={splashImage} alt="" className="w-100" />
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <h1 className="fw-bold mb-5">Contractor Interface</h1>
            <p className="lead">An interface for the contractor to manage their orders and suppliers</p>
            <Link to={appLinks.Dashboard} className="btn btn-outline-primary rounded-pill btn-lg">Get Started</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
