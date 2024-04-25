import React from "react";
import { appLinks } from "../constants/links";
import { Link } from "react-router-dom";
import { orders } from "../data/orders";

function Books() {
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );
  const totalCompletedOrdersAmount = completedOrders.reduce(
    (sum, order) => sum + order.finalTotal,
    0
  );

  const activeOrders = orders.filter((order) => order.status === "Active");
  const totalActiveOrdersAmount = activeOrders.reduce(
    (sum, order) => sum + order.finalTotal,
    0
  );

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const totalPendingOrdersAmount = pendingOrders.reduce(
    (sum, order) => sum + order.finalTotal,
    0
  );
  return (
    <>
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Books of Accounting
        </h5>
        <hr />
        <section className="mb-3">
          <div className="row mt-1">
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Pending Payments</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {totalPendingOrdersAmount} Ksh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Active Payments</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {totalActiveOrdersAmount} Ksh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <h6 className="card-header bg-white">Completed Payments</h6>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {totalCompletedOrdersAmount} Ksh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>
    </>
  );
}

export default Books;
