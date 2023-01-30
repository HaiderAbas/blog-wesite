import SideBar from "@/components/sidebar/sidebar";
import React from "react";

function Table() {
  return (
    <div className="flex ">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-screen">
        <p>Tables</p>
        <h2 className="">Table Layout</h2>
      </div>
    </div>
  );
}

export default Table;
