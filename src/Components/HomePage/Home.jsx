import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="py-40 w-full flex flex-col justify-center items-center bg-[#191919]">
            <div className="w-[90vw] md:w-[756px] flex flex-col justify-center items-start gap-10 sm:gap-20 ">
                <h1 className=" text-4xl sm:text-6xl font-bold text-[#EEEEEE] sm:w-[80%]  sm:text-left tracking-tight">Streamline your tailwind CSS projects</h1>
                <p className="text-[#B4B4B4] font-semibold text-lg sm:text-xl tracking-tight">Simple, elegant, responsive and reusable React components crafted to increase your efficiency and improve your experience as a developer.</p>
                <Link to="/components" className="w-[200px] sm:w-[250px] h-[50px] flex justify-center items-center text-white font-semibold hover:shadow-[0px_0px_10px_7px_#291F43] text-[14px] sm:text-[16px] border border-[#6E56CF] rounded-full">Explore components →</Link>
            </div>
        </div>
    )
}