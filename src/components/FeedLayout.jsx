import React from "react";
import StateWiseIcons from "./StateWiseIcons";

function FeedLayout() {
  return (
    <div className="grid grid-cols-12 gap-2">
      <div className="col-span-2"></div>
      <div className="col-span-8 px-8">
        <StateWiseIcons />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default FeedLayout;
