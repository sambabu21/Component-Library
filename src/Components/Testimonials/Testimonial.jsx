import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";

export default function Testimonial({name,imageUrl,children,title,company,lightMode}){
    return (
        <div className={`w-full relative ${lightMode?"bg-[#EEEEEE]":"bg-[#1a1a1b]"} p-5 md:p-10 md:px-16 flex flex-col justify-center items-center rounded-sm -z-20 shadow-md`}>           
                <BiSolidQuoteAltLeft className={`w-20 h-20 ${lightMode?"text-[#dfdfdf]":"text-[#313131]"} absolute left-6 top-6 -z-10`}/>
                <h1 className={`md:text-lg mt-5 ${lightMode?"text-[#111111]":"text-[#EEEEEE]"} leading-[1.6]`}>{children}</h1>
                <div className="flex justify-center items-center mt-7 gap-3">
                   {imageUrl && <Avatar size="small" src={imageUrl}/>}
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className={`font-bold ${lightMode?"text-[#111111]":"text-[#EEEEEE]"} uppercase text-xs md:text-sm`}>{name}</p>
                        <p className={`${lightMode?"text-[#111111]":"text-[#EEEEEE]"} text-xs md:text-sm`}>{title}, {company}</p>
                    </div>
                </div>
        </div>
    )
}

