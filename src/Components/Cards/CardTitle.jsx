export default function CardTitle({ children,fontSize="20px",fontColor="#EEEEEE" }){
    
    return(
        <h1 className={`font-medium text-[${fontSize}] text-[${fontColor}]`}>{children}</h1>
    )
}