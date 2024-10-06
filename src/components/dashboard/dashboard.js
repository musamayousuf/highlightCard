import React from "react";

import Header from "./header/header";
import Sidebar from "../sidebar/sidebar";

function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
