import { ModalContext } from "./ModalContainer";
import { useContext } from "react";

export default function ModalContent({children}){
    const {open,toggleOpen} = useContext(ModalContext)
    return(
        open && <div className="w-[500px]  rounded-[10px] border-2 border-[#3A3A3A] z-50 bg-[#222222] flex flex-col justify-center items-start relative">
            {children}
        </div>
    )
}