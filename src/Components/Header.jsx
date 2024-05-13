import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-center items-center row-span-1 border-b border-[#3A3A3A] ">
      <div className=" h-20 flex justify-between container items-center mx-auto px-20">
        <Link to="/" className="font-bold text-center text-2xl sm:text-4xl text-[white]  tracking-tight">Defix UI</Link>
        <Link to="/components" className="text-[#EEEEEE] p-2 px-5 font-semibold rounded-md bg-[#6E56CF] hover:shadow-[0px_0px_10px_7px_#291F43]">Components</Link>
      </div>
    </div>
    
  );
}
