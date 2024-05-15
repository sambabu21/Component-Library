import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipClick({ children }) {
  const { toggleOpen } = useContext(TooltipContext);
  return <div onMouseEnter={toggleOpen} onMouseLeave={toggleOpen} className="max-h-20">{children}</div>;
}
