import { NavLink } from "react-router-dom";
import { NavContext } from "../App";
import { useContext } from "react";

export default function Sidebar(){
const { navOpen,setNavOpen } = useContext(NavContext)
const activeStyle = ({ isActive }) => ({
    borderLeft: isActive ? '4px solid #6E56CF' : 'none',
    backgroundColor: isActive ? "#191919" :"#111111"
  })
  const toggleNav = () =>{
    setNavOpen(!navOpen)
  }
    return(
        <div>
        <div className="min-h-full w-[200px] hidden md:flex flex-col items-center pt-16">
            <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">GENERAL</h1>
            <NavLink to="/components/avatars" className="w-full h-12 text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3  hover:bg-[#191919]" style={activeStyle}>Avatars</NavLink>
            <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Badges</NavLink> 
            <NavLink to="/components/buttons" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Buttons</NavLink> 
            <NavLink to="/components/menu" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Menu</NavLink> 
            <NavLink to="/components/tooltips" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Tooltips</NavLink> 
            <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">FEEDBACK</h1>
            <NavLink to="/components/alerts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start  pl-3 hover:bg-[#191919]" style={activeStyle}>Alerts</NavLink> 
            <NavLink to="/components/toasts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Toasts</NavLink> 
            <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">DATA DISPLAY</h1>
            <NavLink to="/components/cards" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Cards</NavLink> 
            <NavLink to="/components/testimonials" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle}>Testimonials</NavLink> 
        </div>
            {
                navOpen ? <div className="min-h-full w-[250px] flex md:hidden flex-col items-center pt-16 absolute left-0 top-20 bg-[#111111] border-r border-[#191919] z-30">
                <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">GENERAL</h1>
                <NavLink to="/components/avatars" className="w-full h-12 text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3  hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Avatars</NavLink>
                <NavLink to="/components/badges" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Badges</NavLink> 
                <NavLink to="/components/buttons" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Buttons</NavLink> 
                <NavLink to="/components/menu" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Menu</NavLink> 
                <NavLink to="/components/tooltips" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Tooltips</NavLink> 
                <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">FEEDBACK</h1>
                <NavLink to="/components/alerts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start  pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Alerts</NavLink> 
                <NavLink to="/components/toasts" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Toasts</NavLink> 
                <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">DATA DISPLAY</h1>
                <NavLink to="/components/cards" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Cards</NavLink> 
                <NavLink to="/components/testimonials" className="w-full h-12  text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3 hover:bg-[#191919]" style={activeStyle} onClick={toggleNav}>Testimonials</NavLink> 
                </div> : null
            }
        </div>
    )
}