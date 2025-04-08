import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import PaymentPlan from "./pages/PaymentPlan";
import Footer from "./components/fragments/Footer";
import Nav from "./components/fragments/Nav";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-plan" element={<PaymentPlan />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
