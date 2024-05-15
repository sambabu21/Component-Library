import { useContext } from "react";
import { MenuContext } from "./Menu";

export default function MenuDropdown({ children }) {
  const { open } = useContext(MenuContext);

  return (
    <>
      {open ? (
        <div className="absolute bg-[#222222] left-0 mt-3 min-w-40 rounded-[8px] z-10">
          {children}
        </div>
      ) : null}
    </>
  );
}
