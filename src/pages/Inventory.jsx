import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { shell } from "../data/shellEquipment";
import { plant } from "../data/buildersPlant";

function Inventory() {
  const ShellEquipmentCount = shell?.length;
  const BuildersCount = plant?.length;

  return (
    <>
      <div className="container mb-3 py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Inventory
        </h5>
        <hr />

        <section className="mt-3 mb-3">
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Count</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Site Equipment</td>
                  <td>0</td>
                  <td>
                    <Link className="btn btn-sm btn-outline-primary">View</Link>
                  </td>
                </tr>

                <tr>
                  <td>Shell Equipment</td>
                  <td>{ShellEquipmentCount}</td>
                  <td>
                    <Link
                      to={appLinks?.ShellEquipment}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>Builders Plant</td>
                  <td>{BuildersCount}</td>
                  <td>
                    <Link
                      to={appLinks?.BuildersPlant}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td>Plumbing</td>
                  <td>0</td>
                  <td>
                    <Link className="btn btn-sm btn-outline-primary">View</Link>
                  </td>
                </tr>

                <tr>
                  <td>Electricity</td>
                  <td>0</td>
                  <td>
                    <Link className="btn btn-sm btn-outline-primary">View</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Inventory;
