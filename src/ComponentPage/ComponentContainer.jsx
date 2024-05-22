import { Link } from "react-router-dom";

export default function ComponentContainer({ children, title }) {
    const linkUrl = `/components/${title}` 
    return (
    <Link to={linkUrl}>
      <div className="w-full h-[200px] rounded-[12px] border border-[#222222]  hover:border-[#6E56CF] flex flex-col justify-between  hover:shadow-[0px_0px_3px_3px_#291F43]">
        <div className="flex justify-center h-full items-center  px-5">{children}</div>
        <div className="w-full py-3 flex justify-between items-center px-8 border-t border-[#222222] bg-[#222222] rounded-b-[12px]">
          <h1 className="font-semibold text-[16px] group-hover:bg-clip-text text-[#EEEEEE] tracking-tight">{title}</h1>
        </div>
      </div>
    </Link>
  );
}
