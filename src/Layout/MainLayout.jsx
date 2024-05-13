import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

export default function MainLayout(){
    return (
        <div className="min-h-screen grid grid-rows-[80px_auto_80px]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}