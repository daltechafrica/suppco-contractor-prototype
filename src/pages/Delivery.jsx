import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Delivery() {
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Delivery
        </h5>
        <hr />
      </div>
    </>
  );
}

export default Delivery;
