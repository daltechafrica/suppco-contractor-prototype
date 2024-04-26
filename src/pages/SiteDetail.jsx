import React from "react";
import { useParams } from "react-router-dom";
import { sites } from "../data/sites";

function SiteDetail() {
  const { siteId } = useParams();
  const site = sites.find((site) => site.id === parseInt(siteId));

  return (
    <>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-2 border-end">
            <section>
              <h4>{site?.name} Information</h4>
              <hr />
              <div className="card mb-3">
                <div className="card-body">
                  <img src={site?.image} alt="" className="avatar-side mb-2" />
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
                  <p className="card-text mb-2">
                    <strong>Created: </strong>
                    {site?.created}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-9 col-sm-12 mb-2"></div>
        </div>
      </div>
    </>
  );
}

export default SiteDetail;
