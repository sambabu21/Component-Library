import { useContext } from "react"
import { MenuContext } from "./Menu"

export default function MenuDropdown({ children }) {
    const { open } = useContext(MenuContext)

    return (
        <>
            {open ? (
                <div className="absolute bg-white left-0 mt-3 w-40 rounded-md">
                    {children}
                </div>
            ) : null
            }
        </>
    )
}