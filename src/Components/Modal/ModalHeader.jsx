import { HiMiniXMark } from "react-icons/hi2";
import { ModalContext } from "./ModalContainer";
import { useContext } from "react";

export default function ModalHeader({children}){
    const {toggleOpen} = useContext(ModalContext)

    return(
        <div className="flex justify-between items-center  w-full p-10">
            <h1 className="text-[#EEEEEE] font-semibold text-[24px]">{children}</h1>
            <div className="w-9 h-9 flex justify-center items-center rounded-[10px] hover:bg-[#313131]">
                <HiMiniXMark className="text-[#EEEEEE] w-8 h-8  top-5 right-5 hover:cursor-pointer" onClick={toggleOpen}/>
            </div>
            
            
        </div>
    )
}