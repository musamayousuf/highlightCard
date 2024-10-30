import React from "react";
import SettingsPlan from "../settings/inside/plan";
import PersonalSettings from "../settings/inside/personalSettings";
import Integration from "../settings/inside/integration";
import Agency from "../settings/inside/agency";
import Rfm from "../settings/inside/rfm";
import CardType from "./inside/card-type";

function Create({ activeSection }) {
  const renderSection = () => {
    switch (activeSection) {
      case "plan":
        return <CardType />;
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
        return <CardType />;
    }
  };
  return (
    <div className="p-2">
      <div className="content-section">{renderSection()}</div>
    </div>
  );
}
export default Create;
