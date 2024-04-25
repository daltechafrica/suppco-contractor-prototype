import React, { useState } from "react";
import { Link } from "react-router-dom";
import { orders } from "../data/orders";
import { appLinks } from "../constants/links";

function Books() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
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

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const filteredOrders = completedOrders.filter((order) => {
    const orderDate = new Date(order.created);
    return (
      orderDate.getMonth() + 1 === parseInt(selectedMonth) &&
      orderDate.getFullYear() === parseInt(selectedYear)
    );
  });

  const totalVAT = filteredOrders.reduce(
    (sum, order) => sum + order.paymentDetail.vat,
    0
  );

  return (
    <>
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks.Dashboard}>
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

        <section className="mb-3">
          <h6>Generate VAT for Specific Month</h6>
          <div className="mb-3">
            <label htmlFor="month" className="form-label me-2">
              Month:
            </label>
            <input
              type="number"
              id="month"
              name="month"
              min="1"
              max="12"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="form-control me-2"
            />
            <label htmlFor="year" className="form-label me-2">
              Year:
            </label>
            <input
              type="number"
              id="year"
              name="year"
              min="2020"
              max="2030"
              value={selectedYear}
              onChange={handleYearChange}
              className="form-control me-2"
            />
          </div>
          <div className="mb-3">
            <p>
              Total VAT for {selectedMonth}/{selectedYear}: {totalVAT} Ksh
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Books;
