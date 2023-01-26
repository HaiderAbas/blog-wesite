import {
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsFillImageFill,
  BsPerson,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

export const Menu = [
  { title: "Dashboard" },
  { title: "Pages", icon: <AiOutlineFileText /> },
  { title: "Media", spacing: true, icon: <BsFillImageFill /> },
  {
    title: "Projects",
    icon: <BsReverseLayoutTextSidebarReverse />,
    submenu: true,
    submenuItems: [
      { title: "submenu 1" },
      { title: "submenu 2" },
      { title: "submenu 3" },
    ],
  },
  { title: "Analytics", icon: <AiOutlineBarChart /> },
  { title: "Inbox", icon: <AiOutlineMail /> },
  { title: "Profile", spacing: true, icon: <BsPerson /> },
  { title: "Setting", icon: <AiOutlineSetting /> },
  { title: "Logout", icon: <AiOutlineLogout /> },
];
