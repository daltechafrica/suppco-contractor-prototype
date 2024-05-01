import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { placedOrder } from "../data/buildersPlant";
import Modal from "react-bootstrap/Modal";

function BuildersPlantOrderSummary() {
  const supplierDetail = placedOrder?.supplierDetail;
  const supplierCompany = placedOrder?.supplierCompany;
  const productDetail = placedOrder?.productDetail;
  const paymentDetail = placedOrder?.paymentDetail;
  const delivery = placedOrder?.deliveryPlan;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks?.BuildersContractorInput}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Order Summary
        </h5>
        <hr />

        {/* order is pending */}
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
                Product - {placedOrder?.product}
              </h6>
              <div className="card-body">
                <p className="card-text mb-2">
                  <strong>Name: </strong>
                  {placedOrder?.product}
                </p>
                <p className="card-text mb-2">
                  <strong>Date: </strong>
                  {placedOrder?.created}
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
                  {placedOrder?.finalTotal} Ksh
                </p>
              </div>
            </div>
          </div>

          {/* submit button */}
          <Link
            onClick={handleShow}
            className="btn btn-sm btn-outline-success text-uppercase"
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
                Order for {placedOrder?.product} has successfully been placed.
                You will be notified once the supplier accepts the order.
              </p>
            </div>
            <div className="modal-footer">
              <Link
                to={appLinks?.BuildersPlant}
                className="btn btn-sm btn-outline-success"
              >
                Builders Plant
              </Link>
            </div>
          </Modal>
        </section>
      </div>
    </>
  );
}

export default BuildersPlantOrderSummary;
