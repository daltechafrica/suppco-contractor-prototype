import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";

function OrderSection() {
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
                <p className="card-text fw-bold">0 orders</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Active Orders</h6>
              <div className="card-body">
                <p className="card-text fw-bold">0 orders</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Completed Orders</h6>
              <div className="card-body">
                <p className="card-text fw-bold">0 orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OrderSection;
