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
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                placeholder="Enter employee name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                className="form-control"
                type="text"
                id="username"
                placeholder="Enter employee username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                placeholder="Enter employee email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="phone">
                Phone
              </label>
              <input
                className="form-control"
                type="text"
                id="phone"
                placeholder="Enter employee phone"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="address">
                Address
              </label>
              <input
                className="form-control"
                type="text"
                id="address"
                placeholder="Enter employee address"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="role">
                Role
              </label>
              <select name="role" id="" className="form-select">
                <option value="Foreman">Foreman</option>
                <option value="Driver">Driver</option>
                <option value="Accountant">Accountant</option>
                <option value="Admin">Admin</option>
                <option value="Site Manager">Site Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="site">
                Site
              </label>
              <select name="site" id="" className="form-select">
                <option value="Site A">Site A</option>
                <option value="Site B">Site B</option>
                <option value="Site C">Site C</option>
                <option value="Site D">Site D</option>
              </select>
            </div>
            <h6>For Drivers only</h6>
            <div className="mb-3">
              <label className="form-label" htmlFor="license">
                License
              </label>
              <input
                className="form-control"
                type="text"
                id="license"
                placeholder="Enter employee license"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="licenseExpiry">
                License Expiry
              </label>
              <input className="form-control" type="date" id="licenseExpiry" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="plateReg">
                Plate Registration
              </label>
              <input
                className="form-control"
                type="text"
                id="plateReg"
                placeholder="Enter employee plate registration"
              />
            </div>
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
