import { NavLink } from "react-router-dom";

export default function LinkItem({children,toggleNav}){
    const activeStyle = ({ isActive }) => ({
        borderLeft: isActive ? "4px solid #6E56CF" : "none",
        backgroundColor: isActive ? "#191919" : "#111111",
      });
    return (
        <NavLink
            to={`/components/${children}`}
            className="w-full py-[14px] text-[#B4B4B4] hover:text-[#EEEEEE] flex items-center justify-start pl-3  hover:bg-[#191919] capitalize"
            style={activeStyle}
            onClick={toggleNav?toggleNav:null}
          >
            {children}
          </NavLink>
    )
}