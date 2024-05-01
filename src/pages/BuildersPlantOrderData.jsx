import React from "react";
import { Link, useParams } from "react-router-dom";
import { buildersPlant } from "../data/buildersPlant";
import { appLinks } from "../constants/links";
import { employees } from "../data/employees";

function BuildersPlantOrderData() {
  const { builderId } = useParams();

  const id = parseInt(builderId);

  const builderPlant = buildersPlant.find((item) => item.id === id);
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          {builderPlant?.title}
        </h5>
        <hr />

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

        <hr />

        <section className="mb-3">
          <h5 className="fw-bold">Order Data</h5>
          <hr />
          <div>
            <form>
              <h6>Rental Details</h6>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="duration" className="form-label">
                      Rental Duration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="duration"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="duration"
                    />
                  </div>
                </div>
              </div>

              <h6>Delivery Details</h6>
              <div className="mb-3">
                <label htmlFor="destination" className="form-label">
                  Delivery Destination
                </label>
                <select name="site" id="" className="form-select">
                  <option value="Site A">Site A</option>
                  <option value="Site B">Site B</option>
                  <option value="Site C">Site C</option>
                  <option value="Site D">Site D</option>
                </select>
              </div>

              <hr />

              <h6>Operation Conditions</h6>
              <div className="mb-3">
                <label htmlFor="condition" className="form-label">
                  Describe Operating Conditions
                </label>
                <textarea
                  name="condition"
                  className="form-control"
                  id=""
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="image" className="form-label">
                      Operating condition image
                    </label>
                    <input type="file" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label htmlFor="staff" className="form-label">
                      Staff
                    </label>
                    <select
                      name="employee"
                      id="employee"
                      className="form-select"
                    >
                      {employees?.map((employee) => (
                        <>
                          <option value={employee.id}>{employee.name}</option>
                        </>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-content-center justify-content-between mb-3">
                  <div>
                    <Link className="btn btn-outline-danger">Cancel</Link>
                  </div>
                  <div>
                    <Link
                      to={`/order-form/${builderId}/builders-plant`}
                      className="btn btn-outline-success"
                    >
                      Proceed
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default BuildersPlantOrderData;
