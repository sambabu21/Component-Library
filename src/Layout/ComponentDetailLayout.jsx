import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

export default function ComponentDetailLayout() {
  return (
    
      <div className="flex mx-auto relative w-[100vw] md:w-[1000px] md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[256px_minmax(0,1fr)] ">
        <Sidebar />
        <Outlet />
      </div>

  );
}
