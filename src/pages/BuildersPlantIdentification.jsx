import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function BuildersPlantIdentification() {
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.BuildersPlant}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Place Order - Identification Specifications
        </h5>
        <hr />
        <section className="mb-3">
          <form>
            <div className="mb-3">
              <label htmlFor="lease" className="form-label">
                Type of Lease
              </label>
              <select name="lease" id="" className="form-select">
                <option value="">Choose lease type</option>
                <option value="wet">Wet</option>
                <option value="dry">Dry</option>
              </select>
            </div>

            <div className="mb-3">
              <Link
                to={appLinks?.BuildersPlantSupplier}
                className="btn btn-sm btn-outline-success"
              >
                Find Supplier
              </Link>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BuildersPlantIdentification;
