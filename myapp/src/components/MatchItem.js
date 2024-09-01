import React from "react";
import Team from "./Team";

const MatchItem = () => {
  return (
    <div className="col-12 lg:col-6">
      <div className="flex justify-content-between align-items-center surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <Team index="1" win='win'/>
        <span>VS</span>
        <Team index="2" win='win'/>
      </div>
    </div>
  );
};

export default MatchItem;
