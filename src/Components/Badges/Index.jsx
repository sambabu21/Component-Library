import Badge from "./Badge";

export default function BadgesSection() {
  return (
    <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0 ">
      <h1 className="text-3xl font-bold">Badges</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col sm:flex-row justify-around items-center bg-[#5423e7] gap-5 sm:gap-2 p-5 rounded-md">
        <div className=" flex flex-col justify-around items-center gap-2 h-52 ">
          <Badge shape="sqaure" color="red">
            Badge 1
          </Badge>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Badge shape="sqaure" color="red">Badge 1</Badge>`}</h1>
        </div>
        <div className=" flex flex-col justify-around items-center gap-2 h-52">
          <Badge shape="pill" color="blue">
            Badge 2
          </Badge>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] p-4 text-[14px] rounded-md text-white">{`<Badge shape="pill" color="blue">Badge 2</Badge>`}</h1>
        </div>
      </div>
      <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-5">
        <p className="text-md flex gap-2 justify-start items-center">
          Shape:
          <div className="flex gap-3 ">
            <Badge shape="sqaure">Square</Badge>
            <Badge shape="pill">Pill</Badge>
          </div>
        </p>
        <p className="text-md flex gap-2 justify-start items-center">
          Color:
          <div className="flex flex-wrap gap-3">
            <Badge color="red">Red</Badge>
            <Badge shape="yellow">Yellow</Badge>
            <Badge shape="grenn">Green</Badge>
            <Badge shape="blue">Blue</Badge>
            <Badge shape="indigo">Indigo</Badge>
            <Badge shape="purple">Purple</Badge>
            <Badge shape="pink">Pink</Badge>
          </div>
        </p>
      </div>
    </div>
  );
}
