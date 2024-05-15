export default function MenuGroup({ children, title }){
    return (
        <div>
            { title ? <p className="text-[#B4B4B4] pl-2 pt-2 text-sm">{title}</p> : null }
            {children}
        </div>
    )
}