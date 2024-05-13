import { Link } from "react-router-dom";

export default function ComponentContainer({ children, title }) {
    const linkUrl = `/components/${title}` 
    return (
    <Link to={linkUrl}>
      <div className="w-[270px] h-[200px] rounded-[16px] border border-[#3A3A3A]  flex flex-col justify-between hover:border-2  hover:shadow-[0px_0px_10px_0px_#313131]">
        <div className="w-full py-4 flex justify-between items-center px-8 border-b border-[#3A3A3A] bg-[#191919] rounded-t-[16px]">
          <h1 className="font-semibold text-md md:text-xl group-hover:bg-clip-text text-[#EEEEEE] tracking-tight">{title}</h1>
        </div>
        <div className="flex justify-center h-full items-center   px-5">{children}</div>
      </div>
    </Link>
  );
}
