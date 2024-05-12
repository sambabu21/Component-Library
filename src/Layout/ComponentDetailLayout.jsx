import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function ComponentDetailLayout(){
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}