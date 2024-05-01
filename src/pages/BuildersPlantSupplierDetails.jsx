import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

const BuildersPlantSupplierDetails = ({ onClose, supplier }) => {
  const productSpecs = supplier?.productSpecifications;

  console.log(productSpecs);
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
              {supplier?.location}
            </p>
            <hr />
            <h5 className="fw-bold">Product Specifications</h5>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Weight</th>
                    <th>Lifting Height</th>
                    <th>Horsepower</th>
                    <th>Rate Per Hour</th>
                    <th>Lease Type</th>
                  </tr>
                </thead>
                <tbody>
                  {productSpecs?.map((spec) => (
                    <>
                      <tr key={spec?.id}>
                        <td>{spec?.title}</td>
                        <td>{spec?.manufacturer}</td>
                        <td>{spec?.model}</td>
                        <td>{spec?.year}</td>
                        <td>{spec?.weight}</td>
                        <td>{spec?.liftingHeight}</td>
                        <td>{spec?.horsepower}</td>
                        <td>{spec?.ratePerHour}</td>
                        <td>{spec?.leaseType}</td>
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
            to={appLinks?.BuildersContractorInput}
            className="btn btn-sm btn-outline-success"
          >
            Proceed
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default BuildersPlantSupplierDetails;
