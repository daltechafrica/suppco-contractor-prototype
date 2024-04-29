import React from "react";
import { Link, useParams } from "react-router-dom";
import { employees } from "../data/employees";
import { appLinks } from "../constants/links";

function EmployeeDetail() {
  const { employeeId } = useParams();
  const employee = employees?.find(
    (employee) => employee?.id?.toString() === employeeId
  );

  const handleSubmit = () => {
    alert("Employee Added and allocated to site");
  };

  return (
    <>
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks?.Employees}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Update {employee?.name} - {employee?.role}
        </h5>
        <hr />

        <section className="mb-3">
          <form>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder={employee?.name}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="username"
                    placeholder={employee?.username}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder={employee?.email}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="phone"
                    placeholder={employee?.phone}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="address"
                    placeholder={employee?.address}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="role">
                    Role
                  </label>
                  <select name="role" id="" className="form-select">
                    <option value={employee?.role}>{employee?.role}</option>
                    <option value="Foreman">Foreman</option>
                    <option value="Driver">Driver</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Admin">Admin</option>
                    <option value="Site Manager">Site Manager</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="mb-3">
                  <label className="form-label" htmlFor="site">
                    Site
                  </label>
                  <select name="site" id="" className="form-select">
                    <option value={employee?.site}>{employee?.site}</option>
                    <option value="Site A">Site A</option>
                    <option value="Site B">Site B</option>
                    <option value="Site C">Site C</option>
                    <option value="Site D">Site D</option>
                  </select>
                </div>
              </div>
            </div>

            {employee?.role === "Driver" && (
              <>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="license">
                        License
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="license"
                        placeholder={employee?.driverDetail?.license}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="licenseExpiry">
                        License Expiry
                      </label>
                      <input
                        className="form-control"
                        type="date"
                        id="licenseExpiry"
                        placeholder={employee?.driverDetail?.licenseExpiry}
                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label" htmlFor="plateReg">
                        Plate Registration
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="plateReg"
                        placeholder={employee?.driverDetail?.plateReg}
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="mb-3">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default EmployeeDetail;
