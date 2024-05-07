import React from "react";
import { Link, useParams } from "react-router-dom";
import { shellSuppliers } from "../data/suppliers";
import { appLinks } from "../constants/links";
import { employees } from "../data/employees";

function AggregateContractorInput() {
  const { id } = useParams();

  const supplierId = parseInt(id);

  const supplier = shellSuppliers?.find(
    (supplier) => supplier?.id === supplierId
  );
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.ShellEquipmentSuppliers}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Order Form
        </h5>
        <hr />

        <section className="mb-3">
          <form>
            {/* Contractor Input */}
            <div>
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
            </div>

            {/* delivery info */}
            <div>
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
            </div>

            {/* Payment Info */}
            <div>
              <h5 className="fw-bold">Payment Details</h5>
              <hr />
              <div className="mb-3">
                <label htmlFor="total" className="form-label">
                  Delivery Charges
                </label>
                <input
                  type="number"
                  disabled
                  placeholder={supplier?.deliveryCondition?.rate}
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
                  placeholder="200000"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="plans" className="form-label">
                  Payment Plan
                </label>
                <select name="plans" id="" className="form-select">
                  {supplier?.paymentConditions?.plans?.map((plan) => (
                    <option value={plan.id}>{plan?.name}</option>
                  ))}
                </select>
              </div>

              <hr />

              {supplier?.paymentConditions?.plans?.some(
                (plan) => plan?.name === "Fixed | 50-50"
              ) && (
                <div className="mb-3">
                  <h6>Payment Breakdown</h6>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Percentage</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Deposit</td>
                          <td>100000</td>
                          <td>
                            {supplier?.paymentConditions?.plans[0]?.deposit}
                          </td>
                          <td>23/01/2024</td>
                        </tr>
                        <tr>
                          <td>Final Payment</td>
                          <td>100000</td>
                          <td>
                            {100 -
                              supplier?.paymentConditions?.plans[0]?.deposit}
                          </td>
                          <td>23/02/2024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            <Link
              to={`/preview/${id}/submit`}
              className="btn btn-outline-success"
            >
              Preview Order
            </Link>
          </form>
        </section>
      </div>
    </>
  );
}

export default AggregateContractorInput;
