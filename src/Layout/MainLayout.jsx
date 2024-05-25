import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"

export default function MainLayout(){
    return (
        <div className="min-h-screen flex flex-col ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}