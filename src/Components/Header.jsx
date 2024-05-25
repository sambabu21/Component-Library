import { Link } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5"
import { NavContext } from "../App";
import { useContext } from "react";

export default function Header() {
  const {navOpen,setNavOpen} = useContext(NavContext);
  const toggleNav = () =>{
    setNavOpen(!navOpen)
  }

  return (
    <div className="row-span-1 border-b border-[#2A2A2A] sticky top-0 bg-[#111111] z-40">
      <div className=" h-16 max-w-[968px] flex justify-between items-center mx-auto px-5">
        <div className="flex justify-center items-center gap-5">
        {navOpen ? <IoClose className="text-[#6E56CF] w-8 h-8 md:hidden" onClick={toggleNav}/> : <HiOutlineMenu className="text-[#6E56CF] w-8 h-8 md:hidden" onClick={toggleNav}/>}
        <Link to="/" className="font-bold text-center text-2xl sm:text-4xl text-[white]  tracking-tight">Defix UI</Link>
        </div>
        <Link to="/components" className="text-[#EEEEEE] flex justify-center items-center font-semibold rounded-full text-[14px] sm:text-[16px] px-[12px] sm:px-[16px] border border-[#6E56CF] h-[36px] hover:shadow-[0px_0px_10px_7px_#291F43]">Components</Link>
      </div>
    </div>
    
  );
}
