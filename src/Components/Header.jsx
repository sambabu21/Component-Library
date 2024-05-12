import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" h-20 border-b border-[#3A3A3A] bg-[#111927]  flex justify-around items-center ">
      <Link to="/" className="font-bold text-center text-2xl sm:text-3xl text-[white] gradient-text tracking-tighter">React Component Library</Link>
      <Link to="/components" className="text-[#EEEEEE] bg-[#003362] p-2 px-5 font-semibold rounded-md hover:bg-gradient-to-br from-[#22c1c3] to-[#fdbb2d]">Components</Link>
    </div>
  );
}
