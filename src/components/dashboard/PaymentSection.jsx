import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";

function PaymentSection() {
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
                <p className="card-text fw-bold">0 Ksh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Active Payments</h6>
              <div className="card-body">
                <p className="card-text fw-bold">0 Ksh</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 mb-2">
            <div className="card">
              <h6 className="card-header bg-white">Completed Payments</h6>
              <div className="card-body">
                <p className="card-text fw-bold">0 Ksh</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentSection;
