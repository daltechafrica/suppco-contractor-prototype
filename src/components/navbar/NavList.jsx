import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";

const NavList = () => {
  return (
    <>
      <div className="list-group list-group-flush border-0">
        <Link
          to={appLinks.Dashboard}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>
        <Link
          to={appLinks.Sites}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-building"></i> Sites
        </Link>
        <div className="dropdown">
          <Link
            to="#"
            className="list-group-item list-group-item-action dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-list-ol"></i> Inventory
          </Link>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li>
              <Link to={appLinks?.SiteEquipment} className="dropdown-item">
                Site Equipment
              </Link>
            </li>
            <li>
              <Link to={appLinks?.ShellEquipment} className="dropdown-item">
                Shell Equipment
              </Link>
            </li>
            <li>
              <Link
                to={appLinks?.PlumbingElectricity}
                className="dropdown-item"
              >
                Plumbing & Electricity
              </Link>
            </li>
            <li>
              <Link to={appLinks?.BuildersPlant} className="dropdown-item">
                Builder's Plant
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to={appLinks.Orders}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-clipboard-data-fill"></i> Orders
        </Link>
        <Link
          to={appLinks.Delivery}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-truck"></i> Deliveries
        </Link>
        <Link
          to={appLinks.Employees}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-people"></i> Employees
        </Link>
        <Link
          to={appLinks.Books}
          className="list-group-item list-group-item-action"
        >
          <i className="bi bi-cash-coin"></i> Books
        </Link>
      </div>
    </>
  );
};

export default NavList;
