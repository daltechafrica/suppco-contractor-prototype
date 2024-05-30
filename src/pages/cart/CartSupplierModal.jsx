import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function CartSupplierModal({ onClose, supplier }) {
  const product = supplier?.products;
  return (
    <>
      <Modal show={true} onHide={onClose} dialogClassName="modal-lg">
        <div className="modal-header">
          <h4 className="modal-title">
            {supplier.id} - {supplier?.name}
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>

        <div className="modal-body">
          <section className="px-3">
            {/* supplier details */}
            <h5 className="fw-bold">Supplier Details</h5>
            <hr />
            <p>
              <strong>Name: </strong>
              {supplier?.name}
            </p>
            <p>
              <strong>Email: </strong>
              {supplier?.email}
            </p>
            <p>
              <strong>Contact: </strong>
              {supplier?.phone}
            </p>
            <p>
              <strong>Location: </strong>
              {supplier?.address}
            </p>
            <hr />
            <h5 className="fw-bold">Product Specifications Available</h5>
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
                  {product?.map((location) => (
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
            <hr />

            {/* payment details */}
            <h5 className="fw-bold">Payment Details - Plans Available</h5>
            <hr />
            <div className="table-responsive">
              <table className="table-bordered table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>Deposit</th>
                    <th>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  {supplier?.paymentConditions?.plans?.map((plan) => (
                    <>
                      <tr key={plan?.id}>
                        <td>{plan?.name}</td>
                        <td>{plan?.deposit || "N/A"}</td>
                        <td>{plan?.conditions}</td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <h5 className="fw-bold">Delivery Conditions</h5>
            <hr />
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Pricing Method</th>
                    <th>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{supplier?.deliveryCondition?.status}</td>
                    <td>
                      {supplier?.deliveryCondition?.pricingMethod || "N/A"}
                    </td>
                    <td>{supplier?.deliveryCondition?.rate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="modal-footer">
          <Link
            to={`/cart-contractor-input/${supplier?.id}/detail`}
            className="btn btn-sm btn-outline-success"
          >
            Select Supplier
          </Link>
        </div>
      </Modal>
    </>
  );
}

export default CartSupplierModal;
