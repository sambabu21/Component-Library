export default function Subheading({ children }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-5">
        <span className="h-6 w-2 bg-[#606060] rounded-r-[80%]"></span>
      <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
        {children}
      </h3>
    </div>
  );
}
