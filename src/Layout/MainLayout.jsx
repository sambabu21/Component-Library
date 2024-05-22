import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

export default function MainLayout(){
    return (
        <div className="min-h-screen grid grid-rows-[64px_auto_64px]">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}