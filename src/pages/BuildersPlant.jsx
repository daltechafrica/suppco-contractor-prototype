import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { plant } from "../data/buildersPlant";

function BuildersPlant() {
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.Inventory}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Builders Plant
        </h5>
        <hr />

        <section className="mt-3 mb-3">
          <div className="card">
            <h5 className="card-header bg-white">Categories</h5>
            <div className="card-body p-0">
              <div className="list-group rounded-0">
                {plant?.map((category) => (
                  <>
                    <Link
                      to={`/category/${category?.id}/detail`}
                      className="list-group-item"
                    >
                      {category?.category}
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default BuildersPlant;
