import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../../constants/links";
import { lumberTruss } from "../../data/cartData";

function Cart() {
  return (
    <>
      <div className="container py-3 mb-3">
        <div className="d-flex align-content-center justify-content-between">
          <h5>
            <span>
              <Link to={appLinks?.Inventory}>
                <i className="bi bi-arrow-left me-1"></i>
              </Link>
            </span>
            Cart
          </h5>

          <Link
            to={appLinks?.CartSuppliers}
            className="btn btn-outline-primary"
          >
            Find Suppliers
          </Link>
        </div>

        <hr />

        <section className="mb-3">
          <div className="table-responsive">
            <table className="table table-bordered caption-top">
              <caption>Items in your cart</caption>
              <thead>
                <tr>
                  <th>Site</th>
                  <th>Size</th>
                  <th>Shape</th>
                  <th>Variation</th>
                  <th>Wood Species</th>
                  <th>Grade</th>
                  <th>Treatment</th>
                  <th>Surface Finish</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                {lumberTruss?.map((location) => (
                  <>
                    <tr key={location?.id}>
                      <td>{location.site}</td>
                      <td>{location.size}</td>
                      <td>{location.shape}</td>
                      <td>{location.variation}</td>
                      <td>{location.woodSpecies}</td>
                      <td>{location.grade}</td>
                      <td>{location.treatment}</td>
                      <td>{location.surfaceFinish}</td>
                      <td>{location.quantity}</td>
                      <td>{location.rate}</td>
                      <td>{location.other}</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
