import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Update the import
import Header from "./components/dashboard/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./screens/home/home";
import Cards from "./screens/home/cards";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="ml-12 p-4 ">
            <Routes>
              <Route path="/home" element={<Home />} />{" "}
              <Route path="/" element={<Home />} exact />{" "}
              <Route path="/cards" element={<Cards />} exact />{" "}
              {/* <Route path="*" element={<h2>404 Not Found</h2>} />{" "} */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
