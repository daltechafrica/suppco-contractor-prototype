import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { buildersPlant } from "../data/buildersPlant";

function BuildersPlant() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlant = buildersPlant.filter((item) => {
    const searchLowerCase = searchQuery.toLowerCase();
    const nameMatch =
      item.title.toLowerCase().includes(searchLowerCase) ||
      item.manufacturer.toLowerCase().includes(searchLowerCase);
    const locationMatch = item.location.toLowerCase().includes(searchLowerCase);

    return nameMatch || locationMatch;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="container-fluid p-3">
        <section className="d-flex justify-content-between align-items-center">
          <Link to={appLinks?.Inventory}>
            <i className="bi bi-arrow-left me-1"></i>
          </Link>
          <h5>Builders Plant</h5>
          <form role="search" className="d-flex">
            <input
              type="search"
              placeholder="Search by name, manufacturer, or location"
              className="form-control border-primary me-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="btn btn-sm btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </section>

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
                {filteredPlant.map((item) => (
                  <tr key={item?.id}>
                    <td>{item?.id}</td>
                    <td>{item?.title}</td>
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
