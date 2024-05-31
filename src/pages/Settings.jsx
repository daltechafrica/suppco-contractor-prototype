import React from "react";
import { Link } from "react-router-dom";
import { appLinks } from "../constants/links";

function Settings() {
  return (
    <>
      <div className="container py-3">
        <h5>
          <span>
            <Link to={appLinks?.Dashboard}>
              <i className="bi bi-arrow-left me-1"></i>
            </Link>
          </span>
          Settings
        </h5>
        <hr />

        {/* Personal profile */}
        <section className="mt-3 mb-3">
          <div className="card">
            <h6 className="card-header bg-white">Personal Details</h6>
            <div className="card-body">
              <form action="">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter username"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* company profile */}
        <section className="mb-3">
          <div className="card">
            <h6 className="card-header bg-white">Company Details</h6>
            <div className="card-body">
              <form action="">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="company" className="form-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company"
                        placeholder="Enter company"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Company Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter address"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Company Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="address"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Company Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="currency" className="form-label">
                        Currency
                      </label>
                      <select name="currency" id="" className="form-select">
                        <option value="kes">KES</option>
                        <option value="usd">USD</option>
                        <option value="ngn">NGN</option>
                        <option value="ghs">GHS</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label htmlFor="fiscalYear" className="form-label">
                        Fiscal Year
                      </label>
                      <select name="fiscalYear" id="" className="form-select">
                        <option value="janDec">January - December</option>
                        <option value="julyJune">July - June</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="mb-3">
          <div className="card">
            <h6 className="card-header bg-white">VAT Settings</h6>
            <div className="card-body">
              <form action="">
                <div className="mb-3">
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      role="switch"
                      id="permission2"
                      name="permission2"
                    />
                    <label htmlFor="permission2" className="form-check-label">
                      Registered for VAT
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="regNumber" className="form-label">
                    VAT Registration Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="regNumber"
                    placeholder="Enter registration number"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="taxReturn" className="form-label">
                    First Tax Return
                  </label>
                  <input type="date" className="form-control" />
                </div>

                <div className="mb-3">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section>
          <div className="card">
            <h6 className="card-header bg-white">Payment Settings</h6>
            <div className="card-body">
              <form>
                <p className="card-title">Update Card Settings</p>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input type="text" className="form-control" id="cardNumber" />
                </div>

                <div className="row">
                  <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="cardExpiry" className="form-label">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="cardExpiry"
                    />
                  </div>
                  <div className="col-md-6 col-sm-12 mb-3">
                    <label htmlFor="cardCVC" className="form-label">
                      CVC
                    </label>
                    <input type="text" className="form-control" id="cardCVC" />
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;
