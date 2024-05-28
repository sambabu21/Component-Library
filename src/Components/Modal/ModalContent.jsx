import { ModalContext } from "./ModalContainer";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalContent({ children }) {
  const { open } = useContext(ModalContext);
  return (
    
      open && (
        <motion.div
            key="modal"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { duration: 0.2 } }}
            exit={{ scale: 0, opacity: 0,transition: { duration: 0.2 } }}
            className="w-[500px]  rounded-[10px] border-2 border-[#3A3A3A] z-50 bg-[#222222] flex flex-col justify-center items-start relative"
        >
          {children}
        </motion.div>
      )
   
  );
}
