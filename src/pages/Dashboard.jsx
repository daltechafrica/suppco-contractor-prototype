import React from "react";
import OrderSection from "../components/dashboard/OrderSection";
import PaymentSection from "../components/dashboard/PaymentSection";
import Avatar from "../assets/images/canvas/avatar.jpg";
import OrderListSection from "../components/dashboard/OrderListSection";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-2">
        <div className="row">
          <div className="col-md-3 col-sm-12 mb-2 border-end">
            <section>
              <h4 className="fw-bold">Profile</h4>
              <hr />
              <div className="card mb-3">
                <h6 className="card-header bg-white">Personal Details</h6>
                <div className="card-body">
                  <img src={Avatar} alt="" className="avatar-side mb-2" />
                  <p className="card-text mb-1">
                    <strong>Username: </strong>scooper
                  </p>
                  <p className="card-text mb-1">
                    <strong>Name: </strong>Sheldon Cooper
                  </p>
                  <p className="card-text mb-1">
                    <strong>Email: </strong>scooper@mail.com
                  </p>
                  <p className="card-text mb-1">
                    <strong>Phone: </strong>+254712345678
                  </p>
                </div>
              </div>
              <div className="card mb-2">
                <h6 className="card-header bg-white">Company Details</h6>
                <div className="card-body">
                  <img src={Avatar} alt="" className="avatar-side mb-2" />

                  <p className="card-text mb-1">
                    <strong>Name: </strong>Scooper Contractors
                  </p>
                  <p className="card-text mb-1">
                    <strong>Email: </strong>scontractors@mail.com
                  </p>
                  <p className="card-text mb-1">
                    <strong>Phone: </strong>+254712345678
                  </p>
                  <p className="card-text mb-1">
                    <strong>Address: </strong>5th Avenue
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-9 col-sm-12 mb-2">
            <h4 className="fw-bold">Dashboard</h4>
            <hr className="w-100" />
            <PaymentSection />
            <OrderSection />
            <OrderListSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
