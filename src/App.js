import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Success from "./components/Contact/Success/Success";
import Footer from "./components/Footer/Footer";

import './App.css';

export const Context = createContext();

const App = () => {
  const [navTheme, setNavTheme] = useState("transparent");
  const [currentPage, setCurrentPage] = useState("home");

  const contextValue = {
    setNavTheme,
    setCurrentPage,
    navTheme,
    currentPage
  };

  return (
    <Context.Provider value={contextValue}>
      <div className="App">
        <Navbar navTheme={navTheme} currentPage={currentPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <div className="footer-spacer"></div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;