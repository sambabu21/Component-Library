import { useContext } from "react";
import { ModalContext } from "./ModalContainer";

export default function Modal({children}){
    const {open} = useContext(ModalContext)
    return (
        open && <div className="fixed w-screen h-screen inset-0 z-50 flex justify-center items-center">
            {children}
        </div>
    )
}