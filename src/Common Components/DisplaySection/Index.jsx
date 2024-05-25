export default function DisplaySection({
  sectionTitle,
  sectionDescription,
  children,
}) {
  return (
    <div className="flex-1 w-full  flex flex-col items-start py-10 sm:py-20 gap-10 overflow-auto ">
      <h1 className="font-semibold text-2xl sm:text-4xl px-10 sm:px-0 text-[#EEEEEE] tracking-tight selection:">
        {sectionTitle}
      </h1>
      <h2 className="text-[#B4B4B4] -mt-5 text-sm sm:text-[18px] px-10 sm:px-0">{sectionDescription}</h2>
      {children}
    </div>
  );
}
