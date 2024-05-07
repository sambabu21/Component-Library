import { createContext } from "react"
import useToggle from "../../Custom Hooks/useToggle"

const MenuContext = createContext()
export { MenuContext }

export default function Menu({ children, onOpen }) {
    const [open, toggleOpen] = useToggle({
        initialValue: true, 
        onToggle: onOpen
    })

    return (
        <MenuContext.Provider value={{ open, toggleOpen }}>
            <div className="relative">
                {children}
            </div>
        </MenuContext.Provider>
    )
}
