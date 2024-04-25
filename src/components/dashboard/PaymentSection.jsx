import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { orders } from "../../data/orders";

function PaymentSection() {
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
      <section className="px-2">
        <Link
          to={appLinks.Books}
          className="h6 text-uppercase fw-semibold text-secondary"
        >
          Payment Summary
        </Link>
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
    </>
  );
}

export default PaymentSection;
