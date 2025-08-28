import "./App.css";
import React from "react";
import NormalizeURL from "./components/NormalizeURL";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";

import Contact from "./components/pages/Contact";
import Team from "./components/pages/Team";
import CabFair from "./components/pages/CabFair";
import "./styles/main.scss";
import Training from "./components/pages/Training";
import Services from "./components/pages/Services";
import Research from "./components/pages/Research";
import Join from "./components/pages/Join";

function App() {
  return (
    <Router>
      <NormalizeURL />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cabfair" element={<CabFair />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/training" element={<Training />} />
        <Route path="/services" element={<Services />} />
        <Route path="/research" element={<Research />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
