import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/dashboard/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./screens/home/home";
import Customers from "./screens/customers/customers";
import Mailings from "./screens/mailings/mailings";
import Locations from "./screens/locations/locations";
import Manager from "./screens/manager/manager";
import Settings from "./screens/settings/settings";
import SettingHeader from "./screens/settings/settingHeader";
import CardRoutes from "./screens/cards/routes/routes";
import CardHeader from "./screens/cards/cardHeader";

const App = () => {
  const [showSettingHeader, setShowSettingHeader] = useState(false);
  const [activeSettingSection, setActiveSettingSection] = useState("plan");

  const handleSidebarIconClick = (icon) => {
    if (icon === "settings") {
      setShowSettingHeader(true);
    } else {
      setShowSettingHeader(false);
    }
  };

  const handleSectionChange = (section) => {
    setActiveSettingSection(section);
  };

  return (
    <Router>
      <div className="app">
        <Header />
        {showSettingHeader && (
          <SettingHeader onSectionSelect={handleSectionChange} />
        )}
        {/* Place useLocation inside the Router */}
        <CardHeaderDisplay />
        <div className="main-content">
          <Sidebar onIconClick={handleSidebarIconClick} />
          <div className="ml-[3rem]">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} exact />
              <Route
                path="/cards/*"
                element={<CardRoutes activeSection={activeSettingSection} />}
              />
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

// New component to conditionally display CardHeader
const CardHeaderDisplay = () => {
  const location = useLocation(); // Now useLocation is within the Router
  return location.pathname === "/cards/create" ? <CardHeader /> : null;
};

export default App;
