import React from "react";
import StateIconCard from "../components/StateIconCard";

function StateIcons() {
  return (
    <div className="grid grid-cols-12 gap-2 mt-4">
      <div className="col-span-2"></div>
      <div className="col-span-8 px-8">
        <StateIconCard />
        <StateIconCard />
        <StateIconCard />
        <StateIconCard />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default StateIcons;
