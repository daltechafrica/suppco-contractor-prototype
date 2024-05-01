import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { shell } from "../data/shellEquipment";
import { buildersPlant } from "../data/buildersPlant";

function Inventory() {
  const ShellEquipmentCount = shell?.length;
  const BuildersCount = buildersPlant?.length;

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

        <section>
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
                  <td>Builders Plant</td>
                  <td>{BuildersCount}</td>
                  <td>
                    <Link
                      to={appLinks?.Builders}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </Link>
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
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Inventory;
