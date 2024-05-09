import Button from "./Button";

export default function ButtonSection() {
  return (
    <div className="py-20 flex flex-col gap-5 border-b">
      <h1 className="text-3xl font-bold">Buttons</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-2">
        <div className=" flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size={"sm"} variant="success">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md">{`<Button size="sm" variant="success">Click Here</Button>`}</h1>
        </div>
        <div className="flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size="md" variant="warning">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md">{`<Button size="md" variant="warning">Click Here</Button>`}</h1>
        </div>
        <div className="flex flex-col justify-around items-center gap-2 h-52 ">
          <Button size="lg" variant="error">
            Click Here
          </Button>
          <h2 className="text-xl mt-5 font-semibold">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md">{`<Button size="lg" variant="error">Click Here</Button>`}</h1>
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
