import React from "react";
import StateWiseIconCard from "./StateWiseIconCard";
import StateWiseIconsShowMoreCard from "./StateWiseIconsShowMoreCard";
import Search from "./Search";

function StateWiseIcons() {
  return (
    <div className="p-4">
      <Search />
      <div className="text-center my-12 text-divide text-sm text-gray-600">
        Maharashtra
      </div>
      <div className="grid grid-cols-3 text-center gap-4">
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconsShowMoreCard />
      </div>
      <div className="text-center my-12 text-divide text-sm text-gray-600">
        Zarkhand
      </div>
      <div className="grid grid-cols-3 text-center gap-4">
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconCard />
        <StateWiseIconsShowMoreCard />
      </div>
    </div>
  );
}

export default StateWiseIcons;
