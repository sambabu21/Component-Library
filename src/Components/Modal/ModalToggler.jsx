import { useContext } from "react"
import { ModalContext } from "./ModalContainer"

export default function ModalToggler({children}){
    const {toggleOpen} = useContext(ModalContext)

    const handleClick = () =>{
        toggleOpen()
        document.body.style.overflow = "hidden"
    }

    return(
        <div onClick={handleClick}>
            {children}
        </div>
    )
}