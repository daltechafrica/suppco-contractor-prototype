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
const Employees = React.lazy(() => import("../pages/Employees"));
const Sites = React.lazy(() => import("../pages/Sites"));
const SiteDetail = React.lazy(() => import("../pages/SiteDetail"));
const EmployeeDetail = React.lazy(() => import("../pages/EmployeeDetail"));
const Pay = React.lazy(() => import("../pages/Pay"));
const BuildersPlant = React.lazy(() => import("../pages/BuildersPlant"));
const ShellEquipment = React.lazy(() => import("../pages/ShellEquipment"));

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
            <Route path={appLinks.Employees} element={<Employees />} />
            <Route path={appLinks.Sites} element={<Sites />} />
            <Route path={appLinks.SiteDetail} element={<SiteDetail />} />
            <Route
              path={appLinks.EmployeeDetail}
              element={<EmployeeDetail />}
            />
            <Route path={appLinks.Pay} element={<Pay />} />
            <Route path={appLinks.BuildersPlant} element={<BuildersPlant />} />
            <Route
              path={appLinks.ShellEquipment}
              element={<ShellEquipment />}
            />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
