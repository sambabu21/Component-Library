import { createContext } from "react";

const CardContext = createContext();
export { CardContext };

export default function Card({
  children,
  className,
  icon,
  image,
  title,
  bgColor = "000000",
  ...rest
}) {
  return (
    <CardContext.Provider value={{icon}} >
      <div className="flex  flex-col">
      { image && <img src={image} className="sm:w-[400px] sm:min-h-[208px] rounded-t-[4px]"/>}
      <div
        className={`sm:w-[400px] min-h-[208px] bg-[#484848] relative ${image ? "rounded-b-[4px]":"rounded-[4px]"} relative flex flex-col justify-center ${
          icon ? "items-center" : "items-start"
        } gap-3 p-5 hover:drop-shadow-xl hover:cursor-pointer`}
      >
        {!image & icon ? null : <div className="text-[#EEEEEE] text-[30px]">{icon}</div>}
        {children}
      </div>
      </div>
      
    </CardContext.Provider>
  );
}
