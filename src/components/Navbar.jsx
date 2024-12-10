import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="px-6 py-4 flex justify-between items-center shadow-sm sticky top-0 bg-white z-50">
      <div
        className="font-medium text-xl text-purple-700 cursor-pointer"
        onClick={handleClick}
      >
        Iconic India
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="text-sm text-gray-700">About us</div>
        <div className="text-sm text-gray-700">Contact us</div>
      </div>
    </div>
  );
}

export default Navbar;
