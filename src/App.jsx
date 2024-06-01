import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./index.css";
import OffcanvasExample from "./OffcanvasExample";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Skills from "./Skills";
import Education from "./Education";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Projects from "./Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <OffcanvasExample />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ABOUTME" element={<Aboutme />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
