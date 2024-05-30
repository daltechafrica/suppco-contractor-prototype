import React, { useState } from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { lumberTrussSuppliers } from "../../data/cartData";
import CartSupplierModal from "./CartSupplierModal";

function CartSuppliers() {
  const [cartSupplier, setCartSupplier] = useState(null);
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.Cart}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Suppliers
        </h5>
        <hr />

        <section>
          <div className="row">
            {lumberTrussSuppliers?.map((supplier) => (
              <>
                <div className="col-md-6 col-sm-12 mb-3" key={supplier?.id}>
                  <div className="card mb-3 rounded-0 h-100">
                    <h5 className="card-header bg-white">{supplier?.name}</h5>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Location: </strong>
                        {supplier?.address}
                      </p>
                      <Link
                        onClick={() => setCartSupplier(supplier?.id)}
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

          {cartSupplier && (
            <CartSupplierModal
              supplier={lumberTrussSuppliers?.find(
                (supplier) => supplier?.id === cartSupplier
              )}
              onClose={() => setCartSupplier(null)}
            />
          )}
        </section>
      </div>
    </>
  );
}

export default CartSuppliers;
