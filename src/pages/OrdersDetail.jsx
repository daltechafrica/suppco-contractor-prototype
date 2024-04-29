import React from "react";
import { Link, useParams } from "react-router-dom";
import { orders } from "../data/orders";
import { appLinks } from "../constants/links";

function OrdersDetail() {
  const { id } = useParams();
  const order = orders?.find((order) => order?.id?.toString() === id);
  const supplierDetail = order?.supplierDetail;
  const supplierCompany = order?.supplierCompany;
  const productDetail = order?.productDetail;
  const paymentDetail = order?.paymentDetail;
  const delivery = order?.deliveryPlan;

  let statusColorClass = "";
  switch (order?.status) {
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
      <div className="container py-3 mb-3">
        <section className="d-flex justify-content-between align-items-center">
          <h5>
            <span>
              <Link to={appLinks?.Orders}>
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
        {/* Pending Orders */}
        {order.status === "Pending" && (
          <section>
            {/* Supplier */}
            <div>
              <h6 className="fw-bold">Supplier Information</h6>
              <hr />
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierDetail?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierDetail?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierDetail?.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier Company</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierCompany?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierCompany?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierCompany?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Product Information */}
            <div>
              <h6 className="fw-bold">Product Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Product - {order?.product}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Name: </strong>
                    {order?.product}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Date: </strong>
                    {order?.created}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Inventory: </strong>
                    {productDetail?.inventory}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Category: </strong>
                    {productDetail?.category || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Subcategory: </strong>
                    {productDetail?.subcategory || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Lease Type: </strong>
                    {productDetail?.lease || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Delivery Information */}
            <div>
              <h6 className="fw-bold">Delivery Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Delivery Details - {delivery?.status}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Option: </strong>
                    {delivery?.option}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Address: </strong>
                    {delivery?.destination}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Pricing: </strong>
                    {delivery?.pricing}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Cost: </strong>
                    {delivery?.cost}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Timeline: </strong>
                    {delivery?.timeline}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Employee: </strong>
                    {delivery?.employee}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Payment Detail */}
            <div>
              <h6 className="fw-bold">Payment Detail</h6>
              <hr />
              <div className="card mb-3">
                <h6 className="card-header bg-white">Payment Details</h6>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Product Price: </strong>
                    {paymentDetail?.price} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Quantity: </strong>
                    {paymentDetail?.quantity || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rental Hours: </strong>
                    {paymentDetail?.hours || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Value Added Tax: </strong>
                    {paymentDetail?.vat} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Total: </strong>
                    {paymentDetail?.total} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Method: </strong>
                    {paymentDetail?.method} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Payment Plan: </strong>
                    {paymentDetail?.plan}
                  </p>
                  <p className="card-text">
                    <strong>Grand Total: </strong>
                    {order?.finalTotal} Ksh
                  </p>
                </div>
              </div>
              {paymentDetail?.plan === "Negotiable Plan" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button className="btn btn-warning btn-sm">
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              {/* Fixed - 50/50 */}
              {paymentDetail?.plan === "Fixed - 50/50" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button className="btn btn-warning btn-sm">
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </section>
        )}

        {/* Active Orders */}
        {order.status === "Active" && (
          <section>
            {/* Supplier */}
            <div>
              <h6 className="fw-bold">Supplier Information</h6>
              <hr />
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierDetail?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierDetail?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierDetail?.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier Company</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierCompany?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierCompany?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierCompany?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Product Information */}
            <div>
              <h6 className="fw-bold">Product Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Product - {order?.product}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Name: </strong>
                    {order?.product}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Date: </strong>
                    {order?.created}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Inventory: </strong>
                    {productDetail?.inventory}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Category: </strong>
                    {productDetail?.category || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Subcategory: </strong>
                    {productDetail?.subcategory || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Lease Type: </strong>
                    {productDetail?.lease || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Delivery Information */}
            <div>
              <h6 className="fw-bold">Delivery Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Delivery Details - {delivery?.status}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Option: </strong>
                    {delivery?.option}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Address: </strong>
                    {delivery?.destination}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Pricing: </strong>
                    {delivery?.pricing}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Cost: </strong>
                    {delivery?.cost}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Timeline: </strong>
                    {delivery?.timeline}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Employee: </strong>
                    {delivery?.employee}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Payment Detail */}
            <div>
              <h6 className="fw-bold">Payment Detail</h6>
              <hr />
              <div className="card mb-3">
                <h6 className="card-header bg-white">Payment Details</h6>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Product Price: </strong>
                    {paymentDetail?.price} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Quantity: </strong>
                    {paymentDetail?.quantity || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rental Hours: </strong>
                    {paymentDetail?.hours || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Value Added Tax: </strong>
                    {paymentDetail?.vat} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Total: </strong>
                    {paymentDetail?.total} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Method: </strong>
                    {paymentDetail?.method} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Payment Plan: </strong>
                    {paymentDetail?.plan}
                  </p>
                  <p className="card-text">
                    <strong>Grand Total: </strong>
                    {order?.finalTotal} Ksh
                  </p>
                  <p className="card-text fst-italic text-secondary">
                    Invoice sent to your email
                  </p>
                </div>
              </div>
              {paymentDetail?.plan === "Fixed - 50/50" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button className="btn btn-warning btn-sm">
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              {/* Negotiable */}
              {paymentDetail?.plan === "Negotiable Plan" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button
                                      className={`btn btn-sm ${
                                        item.status === "Paid"
                                          ? "btn-success"
                                          : "btn-warning"
                                      }`}
                                    >
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </section>
        )}

        {/* Completed Orders */}
        {order.status === "Completed" && (
          <section>
            {/* Supplier */}
            <div>
              <h6 className="fw-bold">Supplier Information</h6>
              <hr />
              <div className="row">
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierDetail?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierDetail?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierDetail?.address}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 mb-2">
                  <div className="card">
                    <h6 className="card-header bg-white">Supplier Company</h6>
                    <div className="card-body">
                      <p className="card-text mb-2">
                        <strong>Name: </strong>
                        {supplierCompany?.name}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Phone: </strong>
                        {supplierCompany?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Address: </strong>
                        {supplierCompany?.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Product Information */}
            <div>
              <h6 className="fw-bold">Product Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Product - {order?.product}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Name: </strong>
                    {order?.product}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Date: </strong>
                    {order?.created}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Inventory: </strong>
                    {productDetail?.inventory}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Category: </strong>
                    {productDetail?.category || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Subcategory: </strong>
                    {productDetail?.subcategory || "N/A"}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Lease Type: </strong>
                    {productDetail?.lease || "N/A"}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Delivery Information */}
            <div>
              <h6 className="fw-bold">Delivery Information</h6>
              <hr />
              <div className="card">
                <h6 className="card-header bg-white">
                  Delivery Details - {delivery?.status}
                </h6>
                <div className="card-body">
                  <p className="card-text mb-2">
                    <strong>Option: </strong>
                    {delivery?.option}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Address: </strong>
                    {delivery?.destination}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Pricing: </strong>
                    {delivery?.pricing}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Cost: </strong>
                    {delivery?.cost}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Timeline: </strong>
                    {delivery?.timeline}
                  </p>
                  <p className="card-text mb-2">
                    <strong>Employee: </strong>
                    {delivery?.employee}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            {/* Payment Detail */}
            <div>
              <h6 className="fw-bold">Payment Detail</h6>
              <hr />
              <div className="card mb-3">
                <h6 className="card-header bg-white">Payment Details</h6>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Product Price: </strong>
                    {paymentDetail?.price} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Quantity: </strong>
                    {paymentDetail?.quantity || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Rental Hours: </strong>
                    {paymentDetail?.hours || "N/A"}
                  </p>
                  <p className="card-text">
                    <strong>Value Added Tax: </strong>
                    {paymentDetail?.vat} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Total: </strong>
                    {paymentDetail?.total} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Method: </strong>
                    {paymentDetail?.method} Ksh
                  </p>
                  <p className="card-text">
                    <strong>Payment Plan: </strong>
                    {paymentDetail?.plan}
                  </p>
                  <p className="card-text">
                    <strong>Grand Total: </strong>
                    {order?.finalTotal} Ksh
                  </p>
                </div>
              </div>
              {paymentDetail?.plan === "Fixed - 50/50" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button className="btn btn-warning btn-sm">
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* Negotiable Plan */}
              {paymentDetail?.plan === "Negotiable Plan" &&
                paymentDetail?.breakdown && (
                  <>
                    <div className="card">
                      <h6 className="card-header bg-white">
                        Payment Breakdown
                      </h6>
                      <div className="card-body">
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {paymentDetail?.breakdown?.map((item) => (
                                <tr>
                                  <td>{item?.name}</td>
                                  <td>{item?.amount}</td>
                                  <td>{item?.date}</td>
                                  <td>
                                    <button className="btn btn-success btn-sm">
                                      {item?.status}
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default OrdersDetail;
