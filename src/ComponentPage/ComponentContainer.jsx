import { Link } from "react-router-dom";

export default function ComponentContainer({ children, title }) {
    const linkUrl = `/components/${title}` 
    return (
    <Link to={linkUrl}>
      <div className="w-[350px] h-[270px] rounded-[14px] border border-[#104D87] bg-[#0D1520] flex flex-col justify-between hover:border-2  hover:shadow-[0px_0px_10px_0px_#104D87]">
        <div className="w-full py-4 flex justify-between items-center px-8 border-b border-[#104D87] bg-[#111927] rounded-t-[14px]">
          <h1 className="font-semibold text-xl group-hover:bg-clip-text text-[#EEEEEE] tracking-tight">{title}</h1>
          {/* <h1 className="font-semibold text-xl group-hover:bg-clip-text text-[#EEEEEE] ">→</h1> */}
        </div>
        <div className="flex justify-center h-full items-center   px-5">{children}</div>
      </div>
    </Link>
  );
}
