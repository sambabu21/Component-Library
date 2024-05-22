export default function DisplaySection({
  sectionTitle,
  sectionDescription,
  children,
}) {
  return (
    <div className="min-h-screen flex-1 md:w-[768px] flex flex-col items-start p-20 gap-10 border">
      <h1 className="font-semibold text-4xl text-[#EEEEEE] tracking-tight selection:">
        {sectionTitle}
      </h1>
      <h2 className="text-[#B4B4B4] -mt-5 ">{sectionDescription}</h2>
      {children}
    </div>
  );
}
