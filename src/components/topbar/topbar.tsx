import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="py-6 flex justify-around bg-blue-500 dark:bg-black">
      <div>
        <ul className="hidden md:flex ">
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#about">Pages</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#skills">Features</Link>
          </li>
          <li className="ml-10 text-sm uppercase hover:border-b">
            <Link href="/#projects">App</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <MdOutlineLightMode
          size={30}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </div>
  );
}

export default TopBar;
