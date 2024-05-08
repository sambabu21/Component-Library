export default function Card({
  children,
  className,
  iconUrl,
  title,
  bgColor = "000000",
  ...rest
}) {
  return (
    <div className="w-[384px] h-[208px] bg-[#F9FAFB] rounded-[8px] relative flex flex-col justify-center items-center p-10 hover:drop-shadow-xl hover:cursor-pointer">
      <img className={`absolute -top-7 bg-[#${bgColor}] drop-shadow-lg`} src={iconUrl} />

      <h1 className="text-black font-medium capitalize mt-5 text-[18px] ">
        {title}
      </h1>
      <p className="text-black">{children}</p>
    </div>
  );
}
