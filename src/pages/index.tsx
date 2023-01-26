import SideBar from "@/components/sidebar/sidebar";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ children }: any) {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home</h1>
      </div>
      <main>{children}</main>
    </div>
  );
}
