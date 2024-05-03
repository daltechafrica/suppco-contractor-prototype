import React, { useState } from "react";
import { Link } from "react-router-dom";
import { orders } from "../data/orders";
import { appLinks } from "../constants/links";

function Books() {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  // Function to group orders by supplier
  const groupOrdersBySupplier = (orders) => {
    return orders.reduce((acc, order) => {
      const {
        supplierDetail: { name },
        paymentDetail: { vat },
      } = order;
      acc[name] = acc[name] || { vat: 0, orders: [] };
      acc[name].vat += parseFloat(vat);
      acc[name].orders.push(order);
      return acc;
    }, {});
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // Filter orders based on completion status
  const filteredOrders = orders.filter((order) => {
    const orderDate = new Date(order.created);
    return (
      order.status === "Completed" &&
      orderDate.getMonth() + 1 === parseInt(selectedMonth) &&
      orderDate.getFullYear() === parseInt(selectedYear)
    );
  });

  // Group filtered orders by supplier
  const ordersBySupplier = groupOrdersBySupplier(filteredOrders);

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

  // Calculate total amounts for pending, active, and completed payments
  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const totalPendingOrdersAmount = pendingOrders.reduce(
    (sum, order) => sum + order.finalTotal,
    0
  );

  const activeOrders = orders.filter((order) => order.status === "Active");
  const totalActiveOrdersAmount = activeOrders.reduce(
    (sum, order) => sum + order.finalTotal,
    0
  );

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );
  const totalCompletedOrdersAmount = completedOrders.reduce(
    (sum, order) => sum + order.finalTotal,
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
                <Link to={appLinks.Orders} className="card-header h6 bg-white">
                  Pending Payments
                </Link>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {totalPendingOrdersAmount} Ksh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <Link to={appLinks.Orders} className="card-header h6 bg-white">
                  Active Payments
                </Link>
                <div className="card-body">
                  <p className="card-text fw-bold">
                    {totalActiveOrdersAmount} Ksh
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mb-2">
              <div className="card">
                <Link to={appLinks.Orders} className="card-header h6 bg-white">
                  Completed Payments
                </Link>
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
                <option key={index} value={index + 1}>
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
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Supplier Name</th>
                  <th>Total VAT</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Render table rows for each supplier */}
                {Object.entries(ordersBySupplier).map(
                  ([supplierName, { vat, orders }]) => (
                    <tr key={supplierName}>
                      <td>{supplierName}</td>
                      <td>{vat.toFixed(2)} Ksh</td>
                      <td>
                        <Link
                          to="/supplier/Supplier%201"
                          className="btn btn-outline-primary btn-sm"
                        >
                          View Orders
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Books;
