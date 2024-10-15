import React from "react";
import SettingsPlan from "./inside/plan";
import PersonalSettings from "./inside/personalSettings";
import Integration from "./inside/integration";
import Agency from "./inside/agency";
import Rfm from "./inside/rfm";

function Settings({ activeSection }) {
  const renderSection = () => {
    switch (activeSection) {
      case "plan":
        return <SettingsPlan />;
      case "personal":
        return <PersonalSettings />;
      // Add other cases for different sections
      case "integrations":
        return <Integration />;
      case "about":
        return <Agency />;
      case "rfm":
        return <Rfm />;
      default:
        return <SettingsPlan />;
    }
  };

  return (
    <div className="p-8 bg-[#F7F7F8]">
      <div className="content-section">{renderSection()}</div>
    </div>
  );
}

export default Settings;
