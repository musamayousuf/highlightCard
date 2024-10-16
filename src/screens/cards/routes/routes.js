// Cards.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "../cards";
import Templates from "../templates";

const CardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} /> {/* Default child route */}
        <Route path="/templates" element={<Templates />} />{" "}
        {/* Dynamic child route */}
      </Routes>
    </div>
  );
};

export default CardRoutes;
