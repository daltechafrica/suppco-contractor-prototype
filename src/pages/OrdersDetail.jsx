import React from "react";
import { Link, useParams } from "react-router-dom";
import { orders } from "../data/orders";
import { appLinks } from "../constants/links";

function OrdersDetail() {
  const { id } = useParams();
  const order = orders.find((order) => order.id.toString() === id);

  let statusColorClass = "";
  switch (order.status) {
    case "Pending":
      statusColorClass = "btn-outline-danger";
      break;
    case "Active":
      statusColorClass = "btn-outline-warning";
      break;
    case "Completed":
      statusColorClass = "btn-outline-success";
      break;
    default:
      statusColorClass = "";
  }

  return (
    <>
      <div className="container py-3">
        <section className="d-flex justify-content-between align-items-center">
          <h5>
            <span>
              <Link to={appLinks.Orders}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            {order.product}
          </h5>
          <button className={`btn btn-sm ${statusColorClass}`}>
            {order.status}
          </button>
        </section>
        <hr />
        <section>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">Supplier Detail</div>
            <div className="col-md-6 col-sm-12 mb-3">Product Detail</div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-3">Delivery Detail</div>
            <div className="col-md-6 col-sm-12 mb-3">Payment Detail</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default OrdersDetail;
