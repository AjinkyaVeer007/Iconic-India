import React from "react";

function Search() {
  return (
    <div className="border bg-white rounded-full p-3 grid grid-cols-3 divide-x">
      <input
        type="text"
        placeholder="Search by places"
        className="px-2 col-span-2 searchInputBox text-gray-700"
      />
      <div>
        <select className="text-gray-700 text-center w-full searchInputBox">
          <option value="" disabled>
            Location
          </option>
          <option value="mh">Maharashtra</option>
          <option value="opel">Zarkhand</option>
          <option value="audi">Tamilnadu</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
