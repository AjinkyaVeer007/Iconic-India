import React from "react";

function Icon() {
  return (
    <div className="grid grid-cols-12 gap-2 mt-4">
      <div className="col-span-2"></div>
      <div className="col-span-8 px-8">
        <img
          src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_707946589lohagard.jpg"
          alt="img"
          className="iconImg"
        />
        <div className="py-2 font-bold text-3xl text-gray-800">Lohagad</div>
        <div className="text-gray-700 text-sm py-2">
          Lohagad is one of the many hill forts of Maharashtra state in India.
          Situated close to the hill station Lonavala and 52 km (32 mi)
          northwest of Pune, Lohagad rises to an elevation of 1,033 m (3,389 ft)
          above sea level. The fort is connected to the neighboring Visapur fort
          by a small range. The fort was under the Lohtamia empire for the
          majority of the time, with a short period of 5 years under the Mughal
          empire.
        </div>
        <div className="py-2 font-bold text-xl text-gray-800">
          How to travel?
        </div>
        <div className="py-4 px-6">
          <ol class="relative text-gray-700 text-sm border-s border-gray-400">
            <li class="mb-8 ms-6">
              <span class="absolute flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full -start-2.5 ring-2 ring-gray-800"></span>
              <h3 class="font-medium leading-tight">Station 1</h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatum consequuntur aperiam.
              </p>
            </li>
            <li class="mb-8 ms-6">
              <span class="absolute flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full -start-2.5 ring-2 ring-gray-800"></span>
              <h3 class="font-medium leading-tight">Station 2</h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatum consequuntur aperiam.
              </p>
            </li>
            <li class="mb-8 ms-6">
              <span class="absolute flex items-center justify-center w-5 h-5 bg-orange-500 rounded-full -start-2.5 ring-2 ring-gray-800"></span>
              <h3 class="font-medium leading-tight">Station 3</h3>
              <p class="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                voluptatum consequuntur aperiam.
              </p>
            </li>
            <li class="ms-6">
              <span class="absolute flex items-center justify-center w-5 h-5 bg-green-500 rounded-full -start-2.5 ring-2 ring-gray-800"></span>
              <h3 class="font-medium leading-tigh">Reached</h3>
            </li>
          </ol>
        </div>
        <div className="py-2 font-bold text-xl text-gray-800">History</div>
        <div className="text-gray-700 text-sm py-2">
          Lohagad has a long history with several dynasties occupying it at
          different periods of time: Lohtamia, Chalukyas, Rashtrakutas, Yadavas,
          Bahamanis, Nizams, Mughals and Marathas. Chatrapati Shivaji Maharaj
          captured it in 1648 AD, but he was forced to surrender it to the
          Mughals in 1665 AD by the Treaty of Purandar. Chatrapati Shivaji
          Maharaj recaptured the fort in 1670 AD and used it for keeping his
          treasury. This fort was used to keep the winnings from Surat. Later in
          Peshwa time Nana Phadnavis used this fort for living for some time and
          built several structures in the fort such as a big tank and a
          step-well.
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}

export default Icon;
