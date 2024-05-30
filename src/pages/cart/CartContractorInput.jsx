import React from "react";
import { Link, useParams } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { lumberTrussSuppliers } from "../../data/cartData";
import { employees } from "../../data/employees";

function CartContractorInput() {
  const { id } = useParams();

  const cartId = parseInt(id);

  const supplier = lumberTrussSuppliers?.find(
    (supplier) => supplier.id === cartId
  );

  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.CartSuppliers}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Order Form
        </h5>
        <hr />

        <section>
          {/* Contractor Input */}
          <form>
            <h5 className="fw-bold">Contractor Input</h5>
            <hr />
            <div className="mb-3">
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

            {/* delivery info */}
            <hr />
            <h5 className="fw-bold">Delivery Details</h5>
            <hr />
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
            
          </form>
        </section>
      </div>
    </>
  );
}

export default CartContractorInput;
