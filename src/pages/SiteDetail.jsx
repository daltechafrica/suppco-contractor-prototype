import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { sites } from "../data/sites";
import { appLinks } from "../constants/links";

function SiteDetail() {
  const { siteId } = useParams();
  const site = sites.find((site) => site.id === parseInt(siteId));
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = site?.orders?.filter((order) => {
    // filtering by status
    if (statusFilter && order.status !== statusFilter) {
      return false;
    }

    // Filter by search query (case-insensitive)
    if (
      searchQuery &&
      !(
        order?.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order?.supplierDetail?.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        order?.supplierCompany?.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    ) {
      return false;
    }

    return true;
  });
  const handleFilterClick = (status) => {
    setStatusFilter(status);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Perform search based on the searchQuery state
    // You can customize this logic if needed
  };

  return (
    <>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-2 border-end">
            <section>
              <h4>{site?.name} Information</h4>
              <hr />
              <div className="card mb-3">
                <div className="card-body">
                  <img src={site?.image} alt="" className="avatar-side mb-2" />
                  <p className="card-text mb-2">
                    <strong>Location: </strong>
                    {site?.address}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Contact: </strong>
                    {site?.phone}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Employees: </strong>
                    {site?.employees.length}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Orders: </strong>
                    {site?.orders.length}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Created: </strong>
                    {site?.created}
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="col-md-9 col-sm-12 mb-2">
            <section className="d-flex justify-content-between align-items-center">
              <h4 className="fw-bold">
                {" "}
                <span>
                  <Link to={appLinks?.Sites}>
                    <i className="bi bi-arrow-left me-1"></i>
                  </Link>
                </span>
                Site Details
              </h4>

              <Link className="btn btn-sm btn-outline-success">Order</Link>
            </section>

            <hr className="w-100" />
            <div className="row">
              <div className="col-md-9 col-sm-12 mb-3">
                <h6 className="fw-semibold text-uppercase text-secondary">
                  Orders
                </h6>
                <div className="d-flex flex-md-row flex-column justify-content-between">
                  {/* creating filters for the table */}
                  <div className="mb-3 d-flex">
                    <button
                      className={`btn mx-1 btn-sm ${
                        statusFilter === "Completed"
                          ? "btn-success"
                          : "btn-outline-success"
                      }`}
                      onClick={() => handleFilterClick("Completed")}
                    >
                      <i className="bi bi-hourglass-bottom fst-normal">
                        Completed
                      </i>
                    </button>
                    <button
                      className={`btn mx-1 btn-sm ${
                        statusFilter === "Active"
                          ? "btn-warning"
                          : "btn-outline-warning"
                      }`}
                      onClick={() => handleFilterClick("Active")}
                    >
                      <i className="bi bi-hourglass-split fst-normal">Active</i>
                    </button>
                    <button
                      className={`btn mx-1 btn-sm ${
                        statusFilter === "Pending"
                          ? "btn-danger"
                          : "btn-outline-danger"
                      }`}
                      onClick={() => handleFilterClick("Pending")}
                    >
                      <i className="bi bi-hourglass-top fst-normal">Pending</i>
                    </button>
                  </div>
                  {/* end */}

                  {/* Search form */}
                  <div className="mb-2">
                    <form
                      role="search"
                      className="d-flex"
                      onSubmit={handleSearchSubmit}
                    >
                      <input
                        type="search"
                        placeholder="Search"
                        className="form-control border-primary me-2"
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button
                        className="btn btn-sm btn-outline-primary"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Supplier Name</th>
                        <th>Supplier Company</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((item, index) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.product}</td>
                          <td>{item.supplierDetail.name}</td>
                          <td>{item.supplierCompany.name}</td>
                          <td>{item.created}</td>
                          <td>
                            <Link
                              to={`/orders/${item.id}/detail`}
                              className="btn btn-outline-primary btn-sm"
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-md-3 col-sm-12 mb-3 border-start">
                <h6 className="fw-semibold text-uppercase text-secondary">
                  Employees
                </h6>
                <div className="list-group list-group-numbered">
                  {site?.employees?.map((item) => (
                    <>
                      <div
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-start"
                      >
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">{item.name}</div>
                          {item.role} <br />
                          {item.phone} <br />
                          {item.email}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SiteDetail;
