import { useContext } from "react"
import { CardContext } from "./Card"

export default function CardBody({ children }){
    const { icon } = useContext(CardContext)
        return(
        <p className={`text-[16px] font-medium text-[#B4B4B4] ${icon && "text-center"}`}>{children}</p>
    )
}