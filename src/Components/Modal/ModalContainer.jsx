import { createContext } from "react";
import useToggle from "../../Custom Hooks/useToggle";
import { AnimatePresence } from "framer-motion";

const ModalContext = createContext();
export { ModalContext };

export default function ModalContainer({ children, onOpen }) {
  const [open, toggleOpen] = useToggle({
    initialValue: false,
    onToggle: onOpen,
  });

  return (
    <ModalContext.Provider value={{ open, toggleOpen }}>
      <AnimatePresence>
        <div className="flex justify-center items-center">{children}</div>
      </AnimatePresence>
    </ModalContext.Provider>
  );
}
