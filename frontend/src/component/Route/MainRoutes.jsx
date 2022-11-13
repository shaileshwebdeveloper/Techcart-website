import React from "react";
import { Route, Routes } from "react-router-dom";
import CartPage from "../cartpage/CartPage";
import { BestSelling } from "../CategoryPages/Bestselling/BestSelling";
import { NewPage } from "../CategoryPages/New/New";
import { SingleBest } from "../CategoryPages/Single/SingleBest";
import { SingleNew } from "../CategoryPages/Single/SingleNew";
import Home from "../Home";
import CreateAccount from "../LoginSignup/CreateAccount";
import Signin from "../LoginSignup/Signin";
import OrderSummaryPage from "../orderSummary/OrderSummaryPage";
import PaymentPage from "../Payment&OTP/PaymentPage";
import Bank from "../Payment&OTP/Bank";
import End from "../End";


export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderSummaryPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/bank" element={<Bank/>} />
        <Route path="/end" element={<End/>} />

        <Route path="/new" element={<NewPage />} />
        <Route path="/new/:id" element={<SingleNew/>} />
        <Route path="/bestselling" element={<BestSelling/>} />
        <Route path="/bestselling/:id" element={<SingleBest/>} />
        
        
      </Routes>
    </div>
  );
};
