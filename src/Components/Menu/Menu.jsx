import { createContext, useEffect, useRef } from "react";
import useToggle from "../../Custom Hooks/useToggle";

const MenuContext = createContext();
export { MenuContext };

export default function Menu({ children, onOpen }) {
  // const ref = useRef()
  const [open, toggleOpen] = useToggle({
    initialValue: false,
    onToggle: onOpen,
  });

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!ref?.current?.contains(event.target)) {
  //       toggleOpen(ref)
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  // }, [ref]);

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="relative select-none">{children}</div>
    </MenuContext.Provider>
  );
}
