import React from "react";
import { FaBars } from "react-icons/fa";
function TopBar(props: any) {
  const { setShowNav, showNav } = props;

  return (
    <div
      className={`fixed  w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <FaBars
          className="h-8 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      
    </div>
  );
}

export default TopBar;
