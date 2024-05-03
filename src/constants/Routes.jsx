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
const BuildersPlantDetail = React.lazy(() =>
  import("../pages/BuildersPlantDetail")
);
const BuildersPlantSupplier = React.lazy(() =>
  import("../pages/BuildersPlantSupplier")
);
const BuildersContractorInput = React.lazy(() =>
  import("../pages/BuildersContractorInput")
);
const BuildersPlantOrderSummary = React.lazy(() =>
  import("../pages/BuildersPlantOrderSummary")
);
const BuildersPlantCategoryDetail = React.lazy(() =>
  import("../pages/BuildersPlantCategoryDetail")
);
const BuildersPlantIdentification = React.lazy(() =>
  import("../pages/BuildersPlantIdentification")
);
const ShellEquipmentDetail = React.lazy(() =>
  import("../pages/ShellEquipmentDetail")
);
const OrderAggregate = React.lazy(() => import("../pages/OrderAggregate"));
const ShellEquipmentSuppliers = React.lazy(() =>
  import("../pages/ShellEquipmentSuppliers")
);
const AggregateContractorInput = React.lazy(() =>
  import("../pages/AggregateContractorInput")
);
const AggregatePreview = React.lazy(() => import("../pages/AggregatePreview"));
const Settings = React.lazy(() => import("../pages/Settings"));

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
            <Route
              path={appLinks?.BuildersPlantDetail}
              element={<BuildersPlantDetail />}
            />
            <Route
              path={appLinks?.BuildersPlantSupplier}
              element={<BuildersPlantSupplier />}
            />
            <Route
              path={appLinks?.BuildersContractorInput}
              element={<BuildersContractorInput />}
            />
            <Route
              path={appLinks?.BuildersPlantOrderSummary}
              element={<BuildersPlantOrderSummary />}
            />
            <Route
              path={`/category/:id/detail`}
              element={<BuildersPlantCategoryDetail />}
            />
            <Route
              path={appLinks?.BuildersPlantIdentification}
              element={<BuildersPlantIdentification />}
            />
            <Route
              path="/shell/:shellItemId/inventory"
              element={<ShellEquipmentDetail />}
            />
            <Route
              path="/order/:shellItemId/aggregate"
              element={<OrderAggregate />}
            />
            <Route
              path={appLinks?.ShellEquipmentSuppliers}
              element={<ShellEquipmentSuppliers />}
            />
            <Route
              path={`/aggregate/:id/order-form`}
              element={<AggregateContractorInput />}
            />
            <Route
              path={`/preview/:id/submit`}
              element={<AggregatePreview />}
            />
            <Route path={appLinks.Settings} element={<Settings />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </>
  );
}

export default BaseRouter;
