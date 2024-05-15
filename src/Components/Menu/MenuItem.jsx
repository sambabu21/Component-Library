import { MenuContext } from "./Menu";
import { useContext } from "react";

export default function MenuItem({ children, icon }) {
  const { toggleOpen } = useContext(MenuContext);

  return (
    <div className="text-[#EEEEEE] pl-4 p-2 flex justify-start items-center item  hover:cursor-pointer hover:bg-[#313131]" onClick={toggleOpen}>
      <div className="flex justify-center items-center gap-2">
          { icon ? icon : null }
        {children}
      </div>
    </div>
  );
}
