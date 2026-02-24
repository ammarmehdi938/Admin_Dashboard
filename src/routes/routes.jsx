import Home from "../pages/home";
import Analytics from "../pages/analytics";
import Products from "../pages/products";
import Orders from "../pages/orders";
import Customers from "../pages/customers";
import { Routes, Route } from "react-router-dom";
import Payments from "../pages/payments";
import Preference from "../pages/preference";
import SignUp from "../pages/signUp";
import LogIn from "../pages/logIn";
import ResetPassword from "../pages/resetPassword";
import ConfirmPassword from "../pages/confirmPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}></Route>
      <Route path="/dashboard" element={<Home />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/preferences" element={<Preference />} />
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/ResetPassword" element={<ResetPassword />}></Route>
      <Route path="/confirmpassword" element={<ConfirmPassword />}></Route>
    </Routes>
  );
};
export default AppRoutes;
