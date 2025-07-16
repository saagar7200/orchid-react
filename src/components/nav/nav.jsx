import React from "react";
import SearchInput from "../inputs/search-input";

const NavBar = () => {
  return (
    <div className="tracking-wider border-b border-blue-600 px-2 py-3 shadow-md  w-full flex justify-between">
      {/* logo */}
      <div>
        <p className="font-bold text-xl italic text-blue-500 ">Notes</p>
      </div>
      {/* search Input */}
      <div>
        <SearchInput/>
      </div>
      {/* user  */}
      <div className='flex gap-1 items-center'>
        <span className=" h-full w-auto text-center aspect-square p-2 font-bold  rounded-full bg-blue-300">SB</span>
        <span className="text-sm">Sagar Bhandari</span>
      </div>
    </div>
  );
};

export default NavBar;
