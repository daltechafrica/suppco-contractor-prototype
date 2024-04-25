import React from "react";
import { orders } from "../../data/orders";
import { Link } from "react-router-dom";

function OrderListSection() {
  const tenOrders = orders.slice(0, 10);
  return (
    <>
      <section className="px-2 mb-2">
        <h6 className=" text-uppercase fw-semibold text-secondary text-decoration-underline">
          Order List
        </h6>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Product</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tenOrders.map((order) => (
                <>
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.created}</td>
                    <td>{order.product}</td>
                    <td>{order.status}</td>
                    <td>
                      <Link
                        to={`/orders/${order.id}/detail`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default OrderListSection;
