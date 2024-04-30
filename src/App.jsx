import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Suspense } from "react";
import Home from "./pages/home/Home";
import MyState from "./context/data/myState";
import { ScrollToTop } from "./components/ScrollToTop";
import React from "react";
import Loader from "./components/loader/Loader";

const Cart = React.lazy(() => import("./pages/cart/Cart"));
const Login = React.lazy(() => import("./pages/registration/Login"));
const Signup = React.lazy(() => import("./pages/registration/Signup"));
const Dashboard = React.lazy(() => import("./pages/admin/dashboard/Dashboard"));
const AddProduct = React.lazy(() => import("./pages/admin/pages/AddProduct"));
const UpdateProduct = React.lazy(() =>
  import("./pages/admin/pages/UpdateProduct")
);
const Allproducts = React.lazy(() => import("./pages/allproducts/AllProducts"));
const NoPage = React.lazy(() => import("./pages/nopage/NoPage"));
const Order = React.lazy(() => import("./pages/order/Order"));
const ProductInfo = React.lazy(() => import("./pages/productInfo/ProductInfo"));

function App() {
  return (
    <MyState>
      <Router>
        <ScrollToTop></ScrollToTop>
        <Suspense
          fallback={
            <div className="flex items-center font-bold">
              <Loader></Loader>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allproducts" element={<Allproducts />} />
            <Route
              path="/order"
              element={
                <ProtectedRoutes>
                  <Order />
                </ProtectedRoutes>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutesForAdmin>
                  <Dashboard />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route
              path="/addproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <AddProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route
              path="/updateproduct"
              element={
                <ProtectedRoutesForAdmin>
                  <UpdateProduct />
                </ProtectedRoutesForAdmin>
              }
            />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "ahmedkhan.mak2030@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
