import Button from "../Button/Button";
import Tooltip from "./Tooltip";
import TooltipClick from "./TooltipClick";
import TooltipPopup from "./TooltipPopup";

export default function TooltipSection() {
  return (
    <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0">
      <h1 className="text-3xl font-bold">Tooltips</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-40 sm:gap-4 mt-20 bg-[#5423e7] p-5 rounded-md">
        <div className=" flex flex-col justify-around items-center gap-2  ">
          <Tooltip title="Archive notes" color="blue">
            <TooltipClick>
              <Button>Click here</Button>
            </TooltipClick>
            <TooltipPopup>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
              tenetur.
            </TooltipPopup>
          </Tooltip>

          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Tooltip title="Archive notes" color="blue">
                        <TooltipClick>
                            <Button>Click here</Button>
                        </TooltipClick>
                        <TooltipPopup>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipPopup>
                    </Tooltip>
                    `}</h1>
        </div>
        <div className=" flex flex-col justify-around items-center gap-2 ">
          <Tooltip title="Archive notes" color="purple" style="bold">
            <TooltipClick>
              <Button>Click here</Button>
            </TooltipClick>
            <TooltipPopup>
              Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
              tenetur.
            </TooltipPopup>
          </Tooltip>

          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white">{`<Tooltip title="Archive notes" color="purple" style="bold">
                        <TooltipClick>
                            <Button>Click here</Button>
                        </TooltipClick>
                        <TooltipPopup>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipPopup>
                    </Tooltip>`}</h1>
        </div>
      </div>
      <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-3">
        <p className="text-md">
          Title: The title text of the popup.{" "}
        </p>
        <p className="text-md">
          Color: Sets the color theme for the popup. Eg:black,blue,purple,green{" "}
        </p>
        <p className="text-md">
          Style: Sets the dark and light theme for the popup. Eg:bold,light{" "}
        </p>
      </div>
    </div>
  );
}
