import React from "react";
import { Link, useParams } from "react-router-dom";
import { orders } from "../data/orders";

function Pay() {
  const { orderId } = useParams();
  const order = orders?.find((order) => order?.id?.toString() === orderId);

  const paymentDetail = order?.paymentDetail;
  return (
    <>
      <div className="container-fluid py-3">
        <h5 className="mb-3">
          <span>
            <Link to={`/orders/${orderId}/detail`}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Make Payment for {order.product}
        </h5>
        <hr />

        <div className="row">
          <div className="col-md-8 col-sm-12 mb-3 border-end">
            <section className="mb-3">
              {/* Invoice */}
              <div className="card rounded-0">
                <h6 className="card-header bg-white">Invoice</h6>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6 col-sm-12">
                      <p className="card-text font-monospace">
                        Supplier Name: {order?.supplierDetail?.name} <br />
                        Supplier Company: {order?.supplierCompany?.name}
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <p className="card-text text-end font-monospace">
                        Ref No.: {order?.id} <br />
                        Date: {order?.created}
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div>
                    {paymentDetail?.plan === "Fixed - upfront" && (
                      <>
                        <div className="table-responsive mt-3 mb-3">
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <td>No.</td>
                                <td>Item</td>
                                <td>Quantity</td>
                                <td>Price</td>
                                <td>VAT</td>
                                <td>Total</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>{order?.product}</td>
                                <td>{paymentDetail?.quantity}</td>
                                <td>{paymentDetail?.price}</td>
                                <td>{paymentDetail?.vat}</td>
                                <td>{paymentDetail?.total}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    )}

                    {/* fixed */}
                    {paymentDetail?.plan === "Fixed - 50/50" &&
                      paymentDetail?.breakdown && (
                        <>
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Amount</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paymentDetail?.breakdown?.map((item) => (
                                  <tr>
                                    <td>{item?.name}</td>
                                    <td>{item?.amount}</td>
                                    <td>{item?.date}</td>
                                    <td>
                                      <button
                                        className={`btn btn-sm ${
                                          item.status === "Pending Payment"
                                            ? "btn-warning"
                                            : "btn-success"
                                        }`}
                                      >
                                        {item.status}
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}

                    {/* Negotiable Plan */}
                    {paymentDetail?.plan === "Negotiable Plan" &&
                      paymentDetail?.breakdown && (
                        <>
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Amount</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                {paymentDetail?.breakdown?.map((item) => (
                                  <tr>
                                    <td>{item?.name}</td>
                                    <td>{item?.amount}</td>
                                    <td>{item?.date}</td>
                                    <td>
                                      <button
                                        className={`btn btn-sm ${
                                          item.status === "Pending Payment"
                                            ? "btn-warning"
                                            : item.status === "Due Payment"
                                            ? "btn-danger"
                                            : "btn-success"
                                        }`}
                                      >
                                        {item.status}
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </>
                      )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="col-md-4 col-sm-12 mb-3">
            <section className="mb-3">
              <div className="card rounded-0 mb-3">
                <h5 className="card-header bg-white">Mobile Payment</h5>
                <div className="card-body">
                  <p className="card-text">
                    Pay via Mpesa | Mobile Money Transfer
                  </p>
                  {/* <p className="card-text">
                    Till Number: {order?.supplierDetail?.tillNumber}
                  </p> */}
                  <p className="card-text">Till Number: 1234567</p>
                  <form>
                    <div className="mb-2">
                      <label htmlFor="prompt" className="form-label">
                        Enter Phone Number
                      </label>
                      <input type="text" className="form-control" id="prompt" />
                    </div>
                    <div className="mb-2">
                      <Link className="btn btn-sm btn-outline-success">
                        Get Prompt
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card rounded-0 mb-3">
                <h5 className="card-header bg-white">Bank Transfer</h5>
                <div className="card-body">
                  <form>
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label">
                        Credit Card Holder Name (Name on Card)
                      </label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="number" className="form-label">
                        Credit Card Number
                      </label>
                      <input type="text" className="form-control" id="number" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="expiry" className="form-label">
                        Expiry
                      </label>
                      <input type="text" className="form-control" id="expiry" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="cvv" className="form-label">
                        CVV
                      </label>
                      <input type="text" className="form-control" id="cvv" />
                    </div>
                    <div className="mb-2">
                      <Link className="btn btn-sm btn-outline-success">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pay;
