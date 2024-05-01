import React from "react";
import { Link, useParams } from "react-router-dom";
import { buildersPlant } from "../data/buildersPlant";
import { appLinks } from "../constants/links";

function BuildersPlantDetail() {
  const { builderId } = useParams();

  const id = parseInt(builderId);

  const builderPlant = buildersPlant.find((item) => item.id === id);

  return (
    <>
      <div className="container-fluid px-3 py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          {builderPlant?.title}
        </h5>
        <hr />

        <div className="row">
          <div className="col-md-8 col-sm-12">
            <section className="mb-3">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Manufacturer</th>
                      <th>Model</th>
                      <th>Year</th>
                      <th>Weight</th>
                      <th>Lifting Height</th>
                      <th>Horsepower</th>
                      <th>Lease Type</th>
                      <th>Rate Per Hour</th>
                      <th>Location</th>
                      <th>Supplier</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{builderPlant?.title}</td>
                      <td>{builderPlant?.manufacturer}</td>
                      <td>{builderPlant?.model}</td>
                      <td>{builderPlant?.year}</td>
                      <td>{builderPlant?.weight}</td>
                      <td>{builderPlant?.liftingHeight}</td>
                      <td>{builderPlant?.horsepower}</td>
                      <td>{builderPlant?.leaseType}</td>
                      <td>{builderPlant?.ratePerHour}</td>
                      <td>{builderPlant?.location}</td>
                      <td>{builderPlant?.supplier?.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="col-md-4 col-sm-12 border-start">
            <section className="mb-3">
              <h6>Place Order - Identification Specifications</h6>
              <hr />
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
        </div>
      </div>
    </>
  );
}

export default BuildersPlantDetail;
