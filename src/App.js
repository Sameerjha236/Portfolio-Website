import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Error from "./Components/Error";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path=""
            element={<Home isLoading={isLoading} setIsLoading={setIsLoading} />}
          />
          <Route
            path="/about"
            element={
              <About isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          />
          <Route
            path="/skills"
            element={
              <Skills isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
