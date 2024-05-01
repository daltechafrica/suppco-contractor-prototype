import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { buildersPlant } from "../data/buildersPlant";

function BuildersPlant() {
  return (
    <>
      <div className="container-fluid p-3">
        <h5>
          <span>
            <Link to={appLinks?.Inventory}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Builders Plant
        </h5>
        <hr />

        <section className="mb-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                  <td>Manufacturer</td>
                  <td>Model</td>
                  <td>Year</td>
                  <td>Weight</td>
                  <td>Lease Type</td>
                  <td>Rate Per Hour</td>
                  <td>Location</td>
                  <td>Supplier</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {buildersPlant?.map((item) => (
                  <>
                    <tr key={item?.id}>
                      <td>{item?.id}</td>
                      <td>{item?.name}</td>
                      <td>{item?.manufacturer}</td>
                      <td>{item?.model}</td>
                      <td>{item?.year}</td>
                      <td>{item?.weight}</td>
                      <td>{item?.leaseType}</td>
                      <td>{item?.ratePerHour}</td>
                      <td>{item?.location}</td>
                      <td>{item?.supplier?.name}</td>
                      <td>
                        <Link
                          to={`/${appLinks?.BuildersPlant}/${item?.id}/detail`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default BuildersPlant;
