export default function MenuItem({ children }) {
  return (
    <div className="text-black text-lg p-2 flex justify-center items-center item hover:text-[#5423e7] hover:cursor-pointer hover:bg-[#5423e731]">
      {children}
    </div>
  );
}
