import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Navbar() {
  return (
    <nav className="navbar sticky-top border-bottom bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand">SUPPCO</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          data-bs-theme="light"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              SUPPCO
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <hr />
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link" to={appLinks.Dashboard}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={appLinks.Books}>
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={appLinks.Orders}>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={appLinks.Delivery}>
                  Delivery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={appLinks.Employees}>
                  Employees
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
