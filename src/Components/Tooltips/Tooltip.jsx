import { createContext } from "react";
import useToggle from "../../Custom Hooks/useToggle";

const TooltipContext = createContext();
export { TooltipContext };

export default function Tooltip({ children, title, position }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
  });
  return (
    <TooltipContext.Provider value={{ title, position, toggleOpen, open }}>
      <div className="relative">{children}</div>
    </TooltipContext.Provider>
  );
}
