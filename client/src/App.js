import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import ThankYouPage from "./pages/thank-you";
import "./App.css";

const App = () => 
  <Router>
  <div>
    <Routes>
      <Route exact path="/landing-page" element={<LandingPage/>} />
      <Route exact path="/thank-you" element={<ThankYouPage/>} />
      <Route path="/" element={<Navigate replace to="/landing-page" />} />
      <Route element={<LandingPage/>} />
    </Routes>
  </div>
  </Router>;

export default App;
