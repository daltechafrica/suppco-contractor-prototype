import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";
import { shellSuppliers } from "../data/suppliers";
import ShellSupplierModal from "./ShellSupplierModal";

function ShellEquipmentSuppliers() {
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.ShellEquipment}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Suppliers
        </h5>
        <hr />

        <section>
          <div className="row">
            {shellSuppliers?.map((supplier) => (
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
                        <strong>Units of Measurement: </strong>
                        {supplier?.paymentConditions?.priceMeasure}
                      </p>
                      <p className="card-text">
                        <strong>Price: </strong>
                        {supplier?.paymentConditions?.pricePerKg}
                      </p>
                      {/* <p className="card-text">
                        <strong>Location: </strong>
                        {supplier?.location}
                      </p> */}
                      <Link
                        onClick={() => setSelectedSupplierId(supplier?.id)}
                        className="btn btn-sm btn-outline-success card-link"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          {selectedSupplierId && (
            <ShellSupplierModal
              supplier={shellSuppliers?.find(
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

export default ShellEquipmentSuppliers;
