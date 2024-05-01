import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { employees } from "../data/employees";

function BuildersContractorInput() {
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.BuildersPlantSupplier}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Order Form
        </h5>
        <hr />

        <section className="mb-3">
          {/* Contractor Input */}
          <form>
            <h5 className="fw-bold">Contractor Input</h5>
            <hr />
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input type="number" className="form-control" />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <label htmlFor="employee" className="form-label">
                  Allocate Staff
                </label>
                <select name="employee" id="" className="form-select">
                  <option value="">Select an employee...</option>
                  {employees?.map((employee) => (
                    <>
                      <option value={employee?.id}>{employee?.name}</option>
                    </>
                  ))}
                </select>
              </div>
            </div>
            <hr />

            {/* Rental data */}
            <h5 className="fw-bold">Rental Details</h5>
            <hr />
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Rental Duration
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="form-control"
                    name="duration"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Start Date
                  </label>
                  <input type="date" className="form-control" name="duration" />
                </div>
              </div>
            </div>
            <hr />

            {/* delivery info */}
            <h5 className="fw-bold">Delivery Details</h5>
            <hr />
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="delivery" className="form-label">
                    Delivery Option
                  </label>
                  <select name="delivery" className="form-select" id="">
                    <option value="">Choose an option</option>
                    <option value="self">Self Collect</option>
                    <option value="supplier">Supplier</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="destination" className="form-label">
                    Delivery Destination
                  </label>
                  <select name="site" id="" className="form-select">
                    <option value="Site A">Site A</option>
                    <option value="Site B">Site B</option>
                    <option value="Site C">Site C</option>
                    <option value="Site D">Site D</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9 col-sm-12">
                <div className="mb-3">
                  <label htmlFor="timeline" className="form-label">
                    Delivery Timeline
                  </label>
                  <div className="input-group">
                    <input type="number" className="form-control" />
                    <select
                      name="timeline"
                      id="timeline"
                      className="form-select"
                    >
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-12">
                <label htmlFor="deadline" className="form-label">
                  Delivery Deadline
                </label>
                <input type="date" className="form-control" />
              </div>
            </div>
            <hr />

            {/* payment details */}
            <h5 className="fw-bold">Payment Details</h5>
            <hr />
            <div className="mb-3">
              <label htmlFor="total" className="form-label">
                Delivery Charges
              </label>
              <input
                type="number"
                disabled
                placeholder="2000"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="total" className="form-label">
                Total - (Inclusive of VAT)
              </label>
              <input
                type="number"
                disabled
                placeholder="230000"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="plans" className="form-label">
                Payment Plan
              </label>
              <select name="plans" id="" className="form-select">
                <option value="">Choose an option</option>
                <option value="50/50">Fixed | 50-50</option>
                <option value="upfront">Fixed | Upfront</option>
                <option value="negotiable">Negotiable | Plan</option>
              </select>
            </div>

            <hr />

            <h5 className="fw-bold">Payment Breakdown</h5>
            <p>In the event of negotiable payment</p>
            <p>Deposit paid first</p>
            <hr />
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Payment No.</th>
                    <th>Percentage %</th>
                    <th>Amount</th>
                    <th>Balance</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>20</td>
                    <td>20000</td>
                    <td>140000</td>
                    <td>01/01/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-2">
              <p className="fw-semibold">Complete the plan</p>
              <form>
                <div className="mb-3">
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-2">
                      <label htmlFor="amount" className="form-label">
                        Enter Percentage
                      </label>
                      <input type="number" className="form-control" />
                    </div>
                    <div className="col-md-6 col-sm-12 mb-2">
                      <label htmlFor="amount" className="form-label">
                        Expected Date
                      </label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <button className="btn btn-sm btn-outline-primary">
                    Add Plan
                  </button>
                </div>
              </form>
            </div>
            <div className="mb-3">
              <div className="d-flex align-content-center justify-content-between mb-3">
                <div>
                  <Link
                    to={appLinks?.BuildersPlantSupplier}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Cancel
                  </Link>
                </div>
                <div>
                  <Link
                    to={appLinks?.BuildersPlantOrderSummary}
                    className="btn btn-sm btn-outline-success"
                  >
                    Proceed
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BuildersContractorInput;
