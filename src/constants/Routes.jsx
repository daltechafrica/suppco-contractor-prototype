import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { appLinks } from "./links";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Delivery = React.lazy(() => import("../pages/Delivery"));
const Inventory = React.lazy(() => import("../pages/Inventory"));
const Books = React.lazy(() => import("../pages/Books"));
const OrdersDetail = React.lazy(() => import("../pages/OrdersDetail"));

function BaseRouter() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          }
        >
          <Navbar />
          <Routes>
            <Route exact path={appLinks.Dashboard} element={<Dashboard />} />
            <Route path={appLinks.Orders} element={<Orders />} />
            <Route path={appLinks.Delivery} element={<Delivery />} />
            <Route path={appLinks.Inventory} element={<Inventory />} />
            <Route path={appLinks.Books} element={<Books />} />
            <Route path={`/orders/:id/detail`} element={<OrdersDetail />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
