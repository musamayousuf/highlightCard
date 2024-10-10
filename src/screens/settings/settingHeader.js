import React from "react";
import SettingHeaderButton from "../../components/button/settingHeaderButton";
import SettingsIcon from "../../icon/settinginsideIcon";

function SettingHeader() {
  return (
    <div className="sticky top-[4rem] z-[50] bg-[#2E2E2E] h-16">
      <div className="pl-1 flex items-center pt-2 space-x-6">
        <div>
          <SettingsIcon color={"white"} size={"24"} />
        </div>
        <div className="text-white ">
          <SettingHeaderButton title={"Plan"} width="w-20" />
        </div>
        <div className="text-white ">
          <SettingHeaderButton title={"Personal settings"} width="w-40" />
        </div>
        <div className="text-white ">
          <SettingHeaderButton title={"Integrations"} width="w-28" />
        </div>
        <div className="text-white ">
          <SettingHeaderButton title={"About the agency"} width="w-40" />
        </div>
        <div className="text-white ">
          <SettingHeaderButton title={"RFM"} width="w-20" />
        </div>
      </div>
    </div>
  );
}

export default SettingHeader;
