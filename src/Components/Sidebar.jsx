import { Link } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="min-h-screen w-[20vw] bg-[#0D1520] border-r border-[#3A3A3A] flex flex-col items-center">
            <h1 className="text-[#EEEEEE] font-semibold text-sm h-16 w-full flex justify-start items-center pl-10 gradient-text">GENERAL</h1>
            <Link to="/components/avatars" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Avatars</Link>
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/alerts" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Alerts</Link> 
            <Link to="/components/buttons" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Buttons</Link> 
            <Link to="/components/dropdown" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Dropdown</Link> 
            <Link to="/components/toasts" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Toasts</Link> 
            <Link to="/components/tooltip" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Tooltips</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            <Link to="/components/badges" className="w-full h-12  text-[#EEEEEE] flex items-center justify-start  pl-14 hover:bg-[#0D2847]">Badges</Link> 
            
        </div>
    )
}