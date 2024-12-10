import React from "react";
import { MdCalendarMonth, MdLocationPin } from "react-icons/md";

function StateIconCard() {
  return (
    <div className="stateIconContainer mb-8">
      <img
        src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_707946589lohagard.jpg"
        alt="img"
        className="stateIconImage object-cover"
      />
      <div className="absolute bg-gradient-to-r from-slate-800 to-60% h-full w-full bottom-0"></div>
      <div className="absolute bottom-6 left-6">
        <div class="grid grid-cols-1 divide-y">
          <div className="p-4 font-bold text-4xl text-white">Lohagad</div>
          <div className="p-4 font-medium text-lg text-gray-200 flex items-center gap-4">
            <MdLocationPin /> Pune, Maharashtra
          </div>
          <div className="p-4 font-medium text-lg text-gray-200 flex items-center gap-4">
            <MdCalendarMonth /> Build in 1650
          </div>
          <div className="p-4 font-medium text-sm bg-white rounded-full text-center text-gray-800">
            View History
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateIconCard;
