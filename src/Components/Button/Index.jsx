import Button from "./Button";

export default function ButtonSection() {
  return (
    
    <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-5 sm:gap-2 bg-[#5423e7] p-5 rounded-md">
        <div className=" flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size={"sm"} variant="success">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Button size="sm" variant="success">Click Here</Button>`}</h1>
        </div>
        <div className="flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size="md" variant="warning">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Button size="md" variant="warning">Click Here</Button>`}</h1>
        </div>
        <div className="flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size="lg" variant="error">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Button size="lg" variant="error">Click Here</Button>`}</h1>
        </div>
      </div>
      <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-3">
        <p className="text-md">
          Size: Determines the size of the button(default medium). eg:sm,lg{" "}
        </p>
        <p className="text-md">
          Variant: Changes the background and text color depending on the nature
          of the button. eg:success,warning,error{" "}
        </p>
      </div>
    </div>
 
  );
}
