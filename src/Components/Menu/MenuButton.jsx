import { useContext } from "react";
import { MenuContext } from "./Menu";
import { RiArrowDownSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoKebabHorizontal } from "react-icons/go";
import { IoPersonSharp } from "react-icons/io5";
import Avatar from "../Avatar/Avatar";


export default function MenuButton({ children,icon,type,avatar }) {
  const { toggleOpen } = useContext(MenuContext);

  if(type === "hamburger"){
    return (
      <div onClick={toggleOpen} className="bg-[#222222] hover:bg-[#313131] text-[#EEEEEE] px-5 py-2 rounded-[8px]  flex justify-center items-center gap-2 hover:cursor-pointer">
      <GiHamburgerMenu />
    </div>
    )
  }else if(type === "kebab"){
    return (
      <div onClick={toggleOpen} className="bg-[#222222] hover:bg-[#313131] text-[#EEEEEE] px-5 py-2 rounded-[8px]  flex justify-center items-center gap-2 hover:cursor-pointer">
      <GoKebabHorizontal className="rotate-90"/>
    </div>
    )
  }else if(type === "avatar"){
    return(
      <div onClick={toggleOpen} className="bg-[#222222] hover:bg-[#313131] text-[#222222] p-2 rounded-full  flex justify-center items-center gap-2 hover:cursor-pointer">
      {
        avatar ? <Avatar src={avatar} size="small"/> : <Avatar size="small"/>
      }
    </div>
    )
  }

  return (
    <div onClick={toggleOpen} className="bg-[#222222] hover:bg-[#313131] text-[#EEEEEE] px-5 py-2 rounded-[8px]  flex justify-center items-center gap-2 hover:cursor-pointer">
      <div className="flex">
        { icon ? icon: null}
        {children} 
      </div>
      {<RiArrowDownSLine className={type?"hidden":"w-4 h-4"}/>}
    </div>
  );
}
