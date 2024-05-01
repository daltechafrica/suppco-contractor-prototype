import React, { useState } from "react";
import { appLinks } from "../constants/links";
import { Link } from "react-router-dom";
import { buildersSuppliers } from "../data/suppliers";
import BuildersPlantSupplierDetails from "./BuildersPlantSupplierDetails";

function BuildersPlantSupplier() {
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.BuildersPlantIdentification}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Suppliers
        </h5>
        <hr />

        <section className="mt-3 mb-3">
          <div className="row">
            {buildersSuppliers?.map((supplier) => (
              <>
                <div className="col-md-6 col-sm-12 mb-3" key={supplier?.id}>
                  <div className="card mb-3 rounded-0 h-100">
                    <h5 className="card-header bg-white">{supplier?.name}</h5>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Location: </strong>
                        {supplier?.location}
                      </p>
                      <p className="card-text">
                        <strong>Rate: </strong>
                        {supplier?.paymentConditions?.ratePerHour} Ksh
                      </p>
                      <p className="card-text">
                        <strong>Type of Lease: </strong>
                        {supplier?.paymentConditions?.leaseType}
                      </p>
                      <Link
                        onClick={() => setSelectedSupplierId(supplier?.id)}
                        className="btn btn-sm btn-outline-success card-link"
                      >
                        Select
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {selectedSupplierId && (
            <BuildersPlantSupplierDetails
              supplier={buildersSuppliers?.find(
                (supplier) => supplier?.id === selectedSupplierId
              )}
              onClose={() => setSelectedSupplierId(null)}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default BuildersPlantSupplier;
