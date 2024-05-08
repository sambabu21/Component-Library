import { createContext } from "react";
import useToggle from "../../Custom Hooks/useToggle";

const TooltipContext = createContext();
export { TooltipContext };

export default function Tooltip({ children, title, style, color }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
  });
  return (
    <TooltipContext.Provider value={{ title, style, color, toggleOpen, open }}>
      <div className="relative">{children}</div>
    </TooltipContext.Provider>
  );
}
