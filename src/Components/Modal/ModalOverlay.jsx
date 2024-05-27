import { ModalContext } from "./ModalContainer";
import { useContext } from "react";

export default function ModalOverlay({closeOnClick}){
    const {open,toggleOpen} = useContext(ModalContext)
    return (
        open && <div className="w-full h-full absolute inset-0 bg-[#111111] opacity-90 z-50 " onClick={closeOnClick ? toggleOpen : null}></div>
    )
}