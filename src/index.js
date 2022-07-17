import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '@forevolve/bootstrap-dark/dist/css/bootstrap-dark.min.css'

import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import Select from "./components/Select"
import Find from "./components/Find"
import Footer from "./components/Footer"

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/find" element={<Find />} />
      <Route path="/select" element={<Select />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);