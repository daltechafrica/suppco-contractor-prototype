import React from "react";
import { Link, useParams } from "react-router-dom";
import { buildersPlant } from "../data/buildersPlant";
import { appLinks } from "../constants/links";

function BuildersPlantDetail() {
  const { builderId } = useParams();

  // Convert builderId to a number since it comes from URL params as a string
  const id = parseInt(builderId);

  // Find the specific item in the buildersPlant array based on the ID
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
      </div>
    </>
  );
}

export default BuildersPlantDetail;
