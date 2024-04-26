import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { employees } from "../data/employees";

function Employees() {
  return (
    <>
      <div className="container py-3 mb-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Orders
        </h5>
        <hr />
        <section className="mb-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {employees?.map((employee) => (
                  <>
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.username}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.address}</td>
                    <td>{employee.role}</td>
                  </tr>
                  </>
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
