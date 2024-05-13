import { NavLink } from "react-router-dom";

export default function Sidebar(){

const activeStyle = ({ isActive }) => ({
    borderLeft: isActive ? '4px solid #6E56CF' : 'none',
    backgroundColor: isActive ? "#191919" :"#111111"
  })
    return(
        <div className="min-h-screen w-[200px]  hidden md:flex flex-col items-center">
            <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">GENERAL</h1>
            <NavLink to="/components/avatars" className="w-full h-12 text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3  hover:bg-[#191919]" style={activeStyle}>Avatars</NavLink>
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/alerts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start  pl-3 hover:bg-[#191919]" style={activeStyle}>Alerts</NavLink> 
            <NavLink to="/components/buttons" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Buttons</NavLink> 
            <NavLink to="/components/dropdown" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Dropdown</NavLink> 
            <NavLink to="/components/toasts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Toasts</NavLink> 
            <NavLink to="/components/tooltip" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Tooltips</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12 text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3  hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            
        </div>
    )
}