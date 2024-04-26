import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Inventory() {
  return (
    <>
      <div className="container mb-3 py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Inventory
        </h5>
      </div>
    </>
  );
}

export default Inventory;
