import React from "react";
import { Link } from "react-router-dom";
import { orders } from "../data/orders";

function SupplierOrdersPage({ location }) {

  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  return (
    <div className="container py-3 mb-3">
      <h5>Orders</h5>
      <hr />
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Supplier Name</th>
              <th>VAT</th>
              <th>Site</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {completedOrders?.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.supplierDetail.name}</td>
                <td>{order.paymentDetail?.vat}</td>
                <td>{order.deliveryPlan.destination}</td>
                <td>{order.created}</td>
                <td>
                  <Link
                    to={`/orders/${order.id}/detail`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SupplierOrdersPage;
