import React from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "../cards";
import Templates from "../templates";
import Create from "../create";

const CardRoutes = ({ activeSection }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/templates" element={<Templates />} />
        <Route
          path="/create"
          element={<Create activeSection={activeSection} />}
        />
      </Routes>
    </div>
  );
};

export default CardRoutes;
