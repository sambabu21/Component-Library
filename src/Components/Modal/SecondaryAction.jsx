import Button from "../Button/Button";
import { ModalContext } from "./ModalContainer";
import { useContext } from "react";

export default function SecondaryAction({children, onClick}){
    const {toggleOpen} = useContext(ModalContext)
    const handleClick = () =>{
        onclick && onclick()
        toggleOpen()
        document.body.style.overflow = "unset"
    }
    return( 
    <Button variant="text" runOnClick={handleClick}>{children}</Button>
    )
}