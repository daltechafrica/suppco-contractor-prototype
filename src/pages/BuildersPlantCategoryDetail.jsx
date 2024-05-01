import React from "react";
import { Link, useParams } from "react-router-dom";
import { plant } from "../data/buildersPlant";
import { appLinks } from "../constants/links";

function BuildersPlantCategoryDetail() {
  const { id } = useParams();

  const catId = parseInt(id);

  const category = plant?.find((item) => item?.id === catId);
  const categoryItem = category?.items;
  return (
    <>
      <div className="container py-3">
        <section className="d-flex justify-content-between align-items-center">
          <h5>
            <span>
              <Link to={appLinks?.BuildersPlant}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            {category?.category}
          </h5>

          {/* Buttons */}
          <div className="d-flex justify-content-around align-items-center">
            <Link
              to={appLinks?.BuildersPlantIdentification}
              className="btn btn-sm btn-outline-primary me-1"
            >
              Order
            </Link>
          </div>
        </section>
        <hr />

        <section>
          <div className="table-responsive">
            <table className="table table-bordered">
              <caption className="caption-top">
                Cranes in your possession
              </caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Manufacturer</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Weight</th>
                  <th>Lease Type</th>
                  <th>Rate Per Hour</th>
                  <th>Location</th>
                  <th>Supplier</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categoryItem?.map((item) => (
                  <>
                    <tr key={item?.id}>
                      <td>{item?.id}</td>
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
                          to={`/builders-plant/${item?.id}/detail`}
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

export default BuildersPlantCategoryDetail;
