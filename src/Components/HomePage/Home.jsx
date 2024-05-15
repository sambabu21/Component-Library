import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="py-40 w-full flex flex-col justify-center items-center bg-[#191919]">
            <div className="max-w-3xl flex flex-col justify-center items-start gap-20 ">
                <h1 className=" text-4xl sm:text-6xl font-bold text-[#EEEEEE] w-[80%] text-left tracking-tight">Streamline your tailwind CSS projects</h1>
                <p className="text-[#B4B4B4] font-semibold text-xl tracking-tight">Simple, elegant, responsive and reusable React components crafted to increase your efficiency and improve your experience as a developer.</p>
                <Link to="/components" className="w-[250px] h-[50px] flex justify-center items-center text-white font-semibold hover:shadow-[0px_0px_10px_7px_#291F43]  bg-[#6E56CF] rounded-[5px]">Explore components →</Link>
            </div>
        </div>
    )
}