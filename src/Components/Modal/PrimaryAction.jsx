import Button from "../Button/Button";

export default function PrimaryAction({children, onClick}){
    return( 
<Button runOnClick={onClick}>{children}</Button>
    )
}