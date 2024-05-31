import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { sites } from "../data/sites";
import Modal from "react-bootstrap/Modal";
import { employees } from "../data/employees";

function Sites() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container mb-3 py-3">
        <section className="d-flex justify-content-between align-items-center">
          <h5>
            <span>
              <Link to={appLinks?.Dashboard}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            Sites
          </h5>

          <Link onClick={handleShow} className="btn btn-outline-success btn-sm">
            Add Site
          </Link>

          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog"
          >
            <div className="modal-header">
              <h5 className="modal-title">Add Site</h5>
              <button
                className="btn-close"
                type="button"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control" type="text" id="name" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input className="form-control" type="text" id="address" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <input className="form-control" type="text" id="phone" />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="image">
                    Image
                  </label>
                  <input className="form-control" type="text" id="image" />
                </div>
                <div className="mb-3">
                  <label htmlFor="administrator" className="form-label">
                    Site Administrator
                  </label>
                  <select name="administrator" id="" className="form-select">
                    <option value="">Select Administrator</option>
                    {employees?.map((employee) => (
                      <>
                        <option value={employee.id}>
                          {employee?.name} - {employee?.phone}
                        </option>
                      </>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <Link
                    onClick={handleClose}
                    className="btn btn-sm btn-outline-success"
                  >
                    Add
                  </Link>
                </div>
              </form>
            </div>
          </Modal>
        </section>
        <hr />
        <section className="mb-3">
          <div className="row">
            {sites?.map((site) => (
              <>
                <div className="col-md-6 col-sm-12 mb-3" key={site.id}>
                  <div className="card h-100">
                    <h5 className="card-header bg-white">{site?.name}</h5>
                    <div className="card-body">
                      <img
                        src={site?.image}
                        alt=""
                        className="avatar-side mb-2"
                      />
                      <p className="card-text mb-2">
                        <strong>Location: </strong>
                        {site?.address}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Contact: </strong>
                        {site?.phone}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Employees: </strong>
                        {site?.employees.length}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Orders: </strong>
                        {site?.orders.length}
                      </p>

                      <Link to={`${appLinks?.Sites}/${site?.id}/detail`}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Sites;
