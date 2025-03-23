import React from "react";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Loginform from "./Components/Loginform";
import Privacy from "./Components/Privacy"
import Signup from "./Components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
