import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { orders } from "../data/orders";

function Orders() {
  const [statusFilter, setStatusFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );
  const completedOrdersCount = completedOrders.length;

  const activeOrders = orders.filter((order) => order.status === "Active");
  const activeOrdersCount = activeOrders.length;

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const pendingOrdersCount = pendingOrders.length;

  const filteredData = orders.filter((order) => {
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
          .includes(searchQuery.toLowerCase()) ||
        order?.deliveryPlan?.destination
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
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Orders
        </h5>
        <hr />
        <section className="mb-3">
          <h6>Order Summary</h6>
          <div className="row mt-1">
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Pending Orders</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {pendingOrdersCount} orders
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Active Orders</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {activeOrdersCount} orders
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Completed Orders</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {completedOrdersCount} orders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-3">
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
                <i className="bi bi-hourglass-bottom fst-normal">Completed</i>
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
                  <th>Site</th>
                  <th>Date</th>
                  <th>Status</th>
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
                    <td>{item.deliveryPlan.destination}</td>
                    <td>{item.created}</td>
                    <td>{item.status}</td>
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
        </section>
      </div>
    </>
  );
}

export default Orders;
