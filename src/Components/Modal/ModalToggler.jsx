import { useContext } from "react"
import { ModalContext } from "./ModalContainer"

export default function ModalToggler({children}){
    const {toggleOpen} = useContext(ModalContext)

    return(
        <div onClick={toggleOpen}>
            {children}
        </div>
    )
}