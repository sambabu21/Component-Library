import { useContext } from "react";
import { TooltipContext } from "./Tooltip";

export default function TooltipClick({ children }) {
  const { toggleOpen } = useContext(TooltipContext);
  return <div onClick={toggleOpen}>{children}</div>;
}
