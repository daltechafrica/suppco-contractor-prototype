import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { orders } from "../../data/orders";

function OrderSection() {
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );
  const completedOrdersCount = completedOrders.length;

  const activeOrders = orders.filter((order) => order.status === "Active");
  const activeOrdersCount = activeOrders.length;

  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const pendingOrdersCount = pendingOrders.length;

  return (
    <>
      <section className="px-2 mb-2">
        <Link
          to={appLinks.Orders}
          className="h6 text-uppercase fw-semibold text-secondary"
        >
          Order Summary
        </Link>
        <div className="row mt-1">
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Pending Orders</h6>
              <div className="card-body">
                <p className="card-text fw-bold">{pendingOrdersCount} orders</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Active Orders</h6>
              <div className="card-body">
                <p className="card-text fw-bold">{activeOrdersCount} orders</p>
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
    </>
  );
}

export default OrderSection;
