import React from "react";

function StateWiseIconCard() {
  return (
    <div className="stateWiseIconCard overflow-hidden relative">
      <img
        src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_707946589lohagard.jpg"
        alt="img"
        className="stateWiseIconCardImage rounded-md object-cover"
      />
      <div className="rounded-md absolute bg-gradient-to-t from-slate-900 h-2/3 w-full bottom-0">
        <div className="absolute bottom-3 text-white w-full text-center text-lg font-medium">
          Lohagad
        </div>
      </div>
    </div>
  );
}

export default StateWiseIconCard;
