import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function ComponentDetailLayout() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center container mx-auto">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
