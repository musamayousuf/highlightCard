import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/dashboard/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./screens/home/home";
import Cards from "./screens/cards/cards";
import Customers from "./screens/customers/customers";
import Mailings from "./screens/mailings/mailings";
import Locations from "./screens/locations/locations";
import Manager from "./screens/manager/manager";
import Settings from "./screens/settings/settings";
import SettingHeader from "./screens/settings/settingHeader";
import CardRoutes from "./screens/cards/routes/routes";

const App = () => {
  const [showSettingHeader, setShowSettingHeader] = useState(false);
  const [activeSettingSection, setActiveSettingSection] = useState("plan"); // Track active section

  const handleSidebarIconClick = (icon) => {
    console.log("Icon clicked:", icon);
    if (icon === "settings") {
      setShowSettingHeader(true);
    } else {
      setShowSettingHeader(false);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSettingSection(section); // Update the active settings section
  };

  return (
    <Router>
      <div className="app">
        <Header />
        {showSettingHeader && (
          <SettingHeader onSectionSelect={handleSectionChange} /> // Pass the handler to SettingHeader
        )}
        <div className="main-content">
          <Sidebar onIconClick={handleSidebarIconClick} />
          <div className="ml-[3rem]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} exact />
              <Route path="/cards/*" element={<CardRoutes />} />
              <Route path="/customers" element={<Customers />} exact />
              <Route path="/mailings" element={<Mailings />} exact />
              <Route path="/locations" element={<Locations />} exact />
              <Route path="/manager" element={<Manager />} exact />
              <Route
                path="/settings"
                element={<Settings activeSection={activeSettingSection} />}
                exact
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
