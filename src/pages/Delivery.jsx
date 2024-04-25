import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { orders } from "../data/orders";

function Delivery() {
  const pendingDeliveries = orders.filter(
    (order) => order.deliveryPlan.status === "Pending"
  );
  const completedDeliveries = orders.filter(
    (order) => order.deliveryPlan.status === "Completed"
  );
  const activeDeliveries = orders.filter(
    (order) => order.deliveryPlan.status === "Active"
  );

  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Delivery
        </h5>
        <hr />
        <section className="mb-3">
          <h6>Pending Deliveries</h6>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Option</th>
                  <th>Destination</th>
                  <th>Pricing</th>
                  <th>Employee</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {pendingDeliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td>{delivery.product}</td>
                    <td>{delivery.deliveryPlan.option}</td>
                    <td>{delivery.deliveryPlan.destination}</td>
                    <td>{delivery.deliveryPlan.pricing || "N/A"}</td>
                    <td>{delivery.deliveryPlan.employee}</td>
                    <td>{delivery.deliveryPlan.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-3">
          <h6>Active Deliveries</h6>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Option</th>
                  <th>Destination</th>
                  <th>Pricing</th>
                  <th>Employee</th>
                  <th>Cost</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {activeDeliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td>{delivery.product}</td>
                    <td>{delivery.deliveryPlan.option}</td>
                    <td>{delivery.deliveryPlan.destination}</td>
                    <td>{delivery.deliveryPlan.pricing || "N/A"}</td>
                    <td>{delivery.deliveryPlan.employee}</td>
                    <td>{delivery.deliveryPlan.cost}</td>
                    <td>
                      <div className="d-flex justify-content-around align-items-center">
                        <Link
                          to={`/orders/${delivery.id}/detail`}
                          className="btn btn-sm btn-outline-primary me-1"
                        >
                          View
                        </Link>
                        <Link className="btn btn-sm btn-primary">Track</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-3">
          <h6>Completed Deliveries</h6>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Option</th>
                  <th>Destination</th>
                  <th>Pricing</th>
                  <th>Employee</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                {completedDeliveries.map((delivery) => (
                  <tr key={delivery.id}>
                    <td>{delivery.product}</td>
                    <td>{delivery.deliveryPlan.option}</td>
                    <td>{delivery.deliveryPlan.destination}</td>
                    <td>{delivery.deliveryPlan.pricing || "N/A"}</td>
                    <td>{delivery.deliveryPlan.employee}</td>
                    <td>{delivery.deliveryPlan.cost}</td>
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

export default Delivery;
