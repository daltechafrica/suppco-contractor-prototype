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

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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
            <select
              id="month"
              name="month"
              value={selectedMonth}
              onChange={handleMonthChange}
              className="form-select me-2"
            >
              <option value="">Select Month</option>
              {monthNames.map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
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
            <p className="fw-bold text-uppercase text-decoration-underline">
              Total VAT for {selectedMonth && monthNames[selectedMonth - 1]}/
              {selectedYear}: {totalVAT} Ksh
            </p>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
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
                {filteredOrders.map((item) => (
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

export default Books;
