import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { lumberTrussSuppliers } from "../../data/cartData";
import Modal from "react-bootstrap/Modal";

function CartConfirmation() {
  const { id } = useParams();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartId = parseInt(id);

  const supplier = lumberTrussSuppliers?.find(
    (supplier) => supplier.id === cartId
  );

  const delivery = supplier?.deliveryPlan;
  const paymentDetail = supplier?.paymentDetail;
  const placedOrder = supplier;
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.Cart}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Bulk Order Summary - Please confirm your order
        </h5>
        <hr />

        <section>
          {/* Supplier */}
          <div>
            <h6 className="fw-bold">Supplier Information</h6>
            <div className="card">
              <h6 className="card-header bg-white">Supplier</h6>
              <div className="card-body">
                <p className="card-text mb-2">
                  <strong>Name: </strong>
                  {supplier?.name}
                </p>
                <p className="card-text mb-2">
                  <strong>Phone: </strong>
                  {supplier?.phone}
                </p>
                <p className="card-text mb-2">
                  <strong>Address: </strong>
                  {supplier?.address}
                </p>
              </div>
            </div>
          </div>

          <hr />

          {/* product info */}
          <div>
            <h6 className="fw-bold">Product Information</h6>

            <div className="card mb-3">
              <h6 className="card-header bg-white">Products Available</h6>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Shape</th>
                        <th>Variation</th>
                        <th>Wood Species</th>
                        <th>Grade</th>
                        <th>Treatment</th>
                        <th>Surface Finish</th>
                        <th>Quantity</th>
                        <th>Rate</th>
                        <th>Other</th>
                      </tr>
                    </thead>
                    <tbody>
                      {supplier?.products?.map((location) => (
                        <>
                          <tr key={location?.id}>
                            <td>{location.size}</td>
                            <td>{location.shape}</td>
                            <td>{location.variation}</td>
                            <td>{location.woodSpecies}</td>
                            <td>{location.grade}</td>
                            <td>{location.treatment}</td>
                            <td>{location.surfaceFinish}</td>
                            <td>{location.quantity}</td>
                            <td>{location.rate}</td>
                            <td>{location.other}</td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-3 border-end">
                    <h6 className="card-title fw-bold">Basic Info</h6>
                    <hr className="mb-1" />
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
                  <div className="col-md-4 col-sm-12 mb-3 border-end">
                    <h6 className="card-title fw-bold">
                      Destination Info - {delivery?.destination}
                    </h6>
                    <hr className="mb-1" />
                    <p className="card-text mb-2">
                      <strong>Administrator: </strong>
                      {delivery?.siteInfo.siteAdmin}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Address: </strong>
                      {delivery?.siteInfo.siteAddress}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Phone: </strong>
                      {delivery?.siteInfo.sitePhone}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Email: </strong>
                      {delivery?.siteInfo.siteEmail}
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-12 mb-3">
                    <h6 className="card-title fw-bold">Transit Info</h6>
                    <hr className="mb-1" />
                    <p className="card-text mb-2">
                      <strong>Date: </strong>
                      {delivery?.deliveryInfo?.date}
                    </p>
                    <p className="card-text mb-2">
                      <strong>State: </strong>
                      {delivery?.deliveryInfo?.state}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Start Status: </strong>
                      {delivery?.deliveryInfo?.startStatus}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Vehicle: </strong>
                      {delivery?.deliveryInfo?.carType}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Driver: </strong>
                      {delivery?.deliveryInfo?.driverName}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Driver Phone: </strong>
                      {delivery?.deliveryInfo?.driverPhone}
                    </p>
                  </div>
                </div>
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
                  {supplier?.finalTotal} Ksh
                </p>
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div className="card mt-3 rounded-0">
            <h6 className="card-header bg-white">Invoice</h6>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-6 col-sm-12">
                  <p className="card-text font-monospace">
                    Supplier Name: {placedOrder?.supplierName} <br />
                    Supplier Company: {placedOrder?.name}
                  </p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <p className="card-text text-end font-monospace">
                    Ref No.: {placedOrder?.id} <br />
                    Date: {placedOrder?.created}
                  </p>
                </div>
              </div>
              <hr />

              <div>
                {paymentDetail?.plan === "Fixed - upfront" && (
                  <>
                    <div className="table-responsive mt-3 mb-3">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <td>No.</td>
                            <td>Item</td>
                            <td>Quantity</td>
                            <td>Price</td>
                            <td>VAT</td>
                            <td>Total</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>{placedOrder?.product}</td>
                            <td>{paymentDetail?.quantity}</td>
                            <td>{paymentDetail?.price}</td>
                            <td>{paymentDetail?.vat}</td>
                            <td>{paymentDetail?.total}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </>
                )}

                {/* Fixed Plan */}
                {paymentDetail?.plan === "Fixed - 50/50" &&
                  paymentDetail?.breakdown && (
                    <>
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
                                      item.status === "Pending Payment"
                                        ? "btn-warning"
                                        : "btn-success"
                                    }`}
                                  >
                                    {item.status}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}

                {/* Negotiable Plan */}
                {paymentDetail?.plan === "Negotiable Plan" &&
                  paymentDetail?.breakdown && (
                    <>
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
                                      item.status === "Pending Payment"
                                        ? "btn-warning"
                                        : "btn-success"
                                    }`}
                                  >
                                    {item.status}
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </>
                  )}
              </div>

              <div className="mb-3">
                <p className="card-text h6">Payment Methods:</p>
                <p className="card-text mb-1">Bank Transfer</p>
                <p className="card-text mb-1">Mobile Money - M-PESA</p>
              </div>
              <p className="card-text text-secondary fst-italic">
                System generated invoice
              </p>
            </div>
          </div>

          {/* submit button */}
          <Link
            onClick={handleShow}
            className="btn btn-sm btn-outline-success text-uppercase mt-3"
          >
            Submit
          </Link>

          <Modal show={show} onHide={handleClose}>
            <div className="modal-header">
              <h5 className="modal-title">Notification</h5>
              <button
                className="btn-close"
                type="button"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Order has successfully been placed. You will be notified once
                the supplier accepts the order.
              </p>
            </div>
            <div className="modal-footer">
              <Link
                to={appLinks?.ShellEquipment}
                className="btn btn-sm btn-outline-success"
              >
                Shell Equipment
              </Link>
            </div>
          </Modal>
        </section>
      </div>
    </>
  );
}

export default CartConfirmation;
