import { useTheme } from "next-themes";
import React from "react";
import { FaBars } from "react-icons/fa";
function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={()=> setTheme(theme === "light" ?"dark" :"light")} className="px-6 py-2  bg-black dark:bg-white text-white dark:text-black">dark</button>
    </div>
  );
}

export default TopBar;
