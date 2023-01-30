import Image from "next/image";
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { Menu } from "../../pages/api/fackApi";
import Link from "next/link";
function SideBar() {
  const [showNav, setShowNav] = useState(true);
  const [subMenuItem, setSubMenuItem] = useState(false);
  console.log(Menu, "Menu");
  return (
    <>
      <div
        className={`bg-blue-900 dark:bg-black dark:text-white overflow-x-hidden	  h-screen overflow-scroll p-5 pt-8 ${
          showNav ? "w-72" : "w-20"
        } relative duration-75`}
      >
        <BsArrowLeftShort
          onClick={() => setShowNav(!showNav)}
          className={`bg-white text-black ${
            showNav ? "" : "rotate-180 "
          } text-3xl rounded-full border  border-[black] cursor-pointer absolute -right-1 top-9`}
        />
        <div className="inline-flex">
          <AiFillEnvironment
            className={`bg-amber-300 border  rounded text-4xl cursor-pointer block float-left mr-4 duration-500 ${
              showNav && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl ${
              !showNav && "scale-0"
            } duration-300`}
          >
            Tailwind
          </h1>
        </div>
        <div
          className={`flex items-center rounded-md bg-gray-400 mt-6 ${
            !showNav ? "px-2.5" : "px-4"
          }  py-2`}
        >
          <BsSearch
            className={`text-white  text-lg block float-left cursor-pointer ${
              showNav && "mr-4"
            }`}
          />
          <input
            type="search"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !showNav && "hidden"
            }`}
          />
        </div>
        <div>
          <ul className="pt-2">
            {Menu.map((item, index) => (
              <>
                <Link href={item.path}>
                  <li
                    className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-green-300 rounded-md ${
                      item.spacing ? "mt-9" : "mt-2"
                    }`}
                  >
                    <span className="text-2xl block float-left">
                      {item.icon ? item.icon : <MdDashboard />}
                    </span>
                    <span
                      className={`text-base font-medium flex-1 duration-200 ${
                        !showNav && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                    {item.submenu && showNav && (
                      <BsChevronDown
                        className={`${subMenuItem && "rotate-180"}`}
                        onClick={() => setSubMenuItem(!subMenuItem)}
                      />
                    )}
                  </li>
                </Link>
                {item.submenu && subMenuItem && showNav && (
                  <ul>
                    {item.submenuItems.map((item2, index) => (
                      <>
                        <Link href={item2.path}>
                          <li
                            className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-green-300 rounded-md ${
                              item.spacing ? "mt-9" : "mt-2"
                            }`}
                          >
                            {item2.title}
                          </li>
                        </Link>
                      </>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
