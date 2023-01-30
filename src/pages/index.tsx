import Deshboard from "@/components/deshboard/deshboard";
import SideBar from "@/components/sidebar/sidebar";
import TopBar from "@/components/topbar/topbar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <div>
        <SideBar/>
      </div>
      <div className=" w-full">
        <Deshboard />
      </div>
    </div>
  );
}
