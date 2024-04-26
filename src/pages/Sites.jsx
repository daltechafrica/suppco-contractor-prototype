import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { sites } from "../data/sites";

function Sites() {
  return (
    <>
      <div className="container mb-3 py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Sites
        </h5>
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
