import React from "react";
import { Link, useParams } from "react-router-dom";
import { appLinks } from "../../constants/links";

function CartContractorInput() {
  const { id } = useParams();

  console.log(id);

  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.CartSuppliers}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Order Form
        </h5>
        <hr />
      </div>
    </>
  );
}

export default CartContractorInput;
