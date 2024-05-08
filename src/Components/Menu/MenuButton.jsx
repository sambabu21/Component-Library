import { useContext } from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  const { toggleOpen } = useContext(MenuContext);
  return (
    <Button onClick={toggleOpen} className="bg-white text-lg">
      {children}
    </Button>
  );
}
