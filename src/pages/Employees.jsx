import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { employees } from "../data/employees";
import Modal from "react-bootstrap/Modal";

function Employees() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setShow(false);
    alert("Employee Added and allocated to site");
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container py-3 mb-3">
        <section className="d-flex justify-content-between align-items-center">
          <h5>
            <span>
              <Link to={appLinks?.Dashboard}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            Employees Section
          </h5>

          {/* Buttons */}
          <div className="d-flex justify-content-around align-items-center">
            <Link
              onClick={() =>
                alert(
                  "Registration Link copied. Send it to the potential employee"
                )
              }
              className="btn btn-sm btn-outline-primary me-1"
            >
              Copy
            </Link>
            <Link onClick={handleShow} className="btn btn-sm btn-primary">
              Add
            </Link>
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="modal-dialog modal-lg"
          >
            <div className="modal-header">
              <h5 className="modal-title">Add New Employee</h5>
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
                  <input
                    className="form-control"
                    type="date"
                    id="licenseExpiry"
                  />
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
            </div>
          </Modal>
        </section>
        <hr />

        <section className="mb-3 col-md-4 col-sm-12">
          <input
            type="search"
            className="form-control"
            placeholder="Search by site or role..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
        <section className="mb-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Role</th>
                  <th>Site</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>{employee.role}</td>
                    <td>{employee.site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Employees;
