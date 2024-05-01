import React from "react";
import { Link } from "react-router-dom";
import { shell } from "../data/shellEquipment";
import { appLinks } from "../constants/links";

function ShellEquipment() {
  return (
    <>
      <div className="container py-3">
        <div>
          <h2 className="fw-bold ">
            <span>
              <Link to={appLinks?.Inventory}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            Shell Equipment
          </h2>
          <hr />
        </div>

        <section>
          <div className="card">
            <h5 className="card-header bg-white">Categories</h5>
            {shell?.map((shell) => (
              <>
                <div className="list-group list-group-flush" key={shell.id}>
                  <Link
                    className="list-group-item list-group-item-action fw-bold"
                    data-bs-toggle="collapse"
                    role="button"
                    to={`#collapseCategory${shell.id}`}
                    aria-expanded="false"
                  >
                    {shell.category}
                  </Link>

                  <div className="collapse" id={`collapseCategory${shell.id}`}>
                    <div className="list-group list-group-flush">
                      {shell.subCategory.map((subCategory) => (
                        <>
                          <Link
                            className="list-group-item list-group-item-action fw-semibold"
                            data-bs-toggle="collapse"
                            role="button"
                            to={`#collapseSubCategory${shell.id}-${subCategory.id}`}
                            aria-expanded="false"
                          >
                            {subCategory.name}
                          </Link>

                          <div
                            className="collapse"
                            id={`collapseSubCategory${shell.id}-${subCategory.id}`}
                          >
                            <div className="list-group list-group-flush">
                              {subCategory.items.map((item) => (
                                <Link
                                  className="list-group-item list-group-item-action"
                                  to={`/shell/${item.id}/inventory`}
                                  aria-expanded="false"
                                >
                                  {item.item}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      ))}
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

export default ShellEquipment;
