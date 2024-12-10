import React from "react";
import { useNavigate } from "react-router-dom";

function StateWiseIconsShowMoreCard() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/state/mh");
  };
  return (
    <div className="rounded-md bg-slate-200 flex items-center justify-center cursor-pointer">
      <div className="text-sm text-purple-700" onClick={handleClick}>
        Show More
      </div>
    </div>
  );
}

export default StateWiseIconsShowMoreCard;
