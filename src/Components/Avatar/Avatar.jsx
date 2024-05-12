import { IoPersonSharp } from "react-icons/io5"
import classnames from "classnames";



export default function Avatar({src, alt, className, children,size,...rest }) {
    let sizeClass = size && `av-${size}`
    const imageClass = classnames( sizeClass, className,"avatar rounded-full flex justify-center items-center bg-[#F3F4F6]");
    const initialClass = classnames( sizeClass, className,"avatar rounded-full flex justify-center items-center text-lg font-semibold bg-[#F3F4F6]");
    const iconClass= classnames( sizeClass, className, "avatar rounded-full flex justify-center items-center bg-[#F3F4F6]")

    if (src) {
        return (
            <div className={imageClass} {...rest}>
                <img src={src} alt={alt} className="w-[90%] rounded-full"/>
            </div>
        )
    }
    if (children) {
        return (
            <div className={initialClass} {...rest}>
                {children}
            </div>
        )
    }
    else {
        return (
            <div className={iconClass} {...rest}>
                <IoPersonSharp className="w-6 h-6"/>
            </div>
        )
    }
}