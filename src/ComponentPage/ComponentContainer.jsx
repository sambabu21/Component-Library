import { Link } from "react-router-dom";

export default function ComponentContainer({ children, title }) {
    const linkUrl = `/components/${title}` 
    return (
    <Link to={linkUrl}>
      <div className="w-[238px] h-[223px] rounded-[16px] border border-[#3A3A3A] flex flex-col justify-between hover:border-2  hover:shadow-[0px_0px_10px_0px_#313131]">
        <div className="w-full py-3 flex justify-between items-center px-8 border-b border-[#3A3A3A] bg-[#222222] rounded-t-[16px]">
          <h1 className="font-semibold text-lg group-hover:bg-clip-text text-[#EEEEEE] tracking-tight">{title}</h1>
        </div>
        <div className="flex justify-center h-full items-center   px-5">{children}</div>
      </div>
    </Link>
  );
}
