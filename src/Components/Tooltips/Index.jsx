import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";
import TooltipClick from "./TooltipHover";
import TooltipPopup from "./TooltipPopup";

export default function TooltipSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Tooltips
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          A tooltip is a brief, informative message that appears when a user
          interacts with an element.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default tooltip
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Tooltip title="Archive notes">
                <TooltipClick>
                  <Button variant="text">Hover here</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>
            </div>
          }
          code={`
    <div>
      <Tooltip title="Archive notes" color="blue">
        <TooltipClick>
            <Button variant="text">Hover here</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>             
    </div>
          `}
        />
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Tooltip position
        </h3>
        <PreviewCode
          component={
            <div className="flex flex-wrap justify-center items-center gap-20">
              <Tooltip title="Archive notes">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="top-left">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="top-right">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="left">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="right">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="bottom">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="bottom-left">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>

              <Tooltip title="Archive notes" position="bottom-right">
                <TooltipClick>
                  <Button variant="text">Hover</Button>
                </TooltipClick>
                <TooltipPopup>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                  oluptatum tenetur.
                </TooltipPopup>
              </Tooltip>
            </div>
          }
          code={`
    <div>
      <Tooltip title="Archive notes">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="top-left">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="top-right">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="left">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="right">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="bottom">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="bottom-left">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>

      <Tooltip title="Archive notes" position="bottom-right">
        <TooltipClick>
          <Button variant="text">Hover</Button>
        </TooltipClick>
        <TooltipPopup>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
          oluptatum tenetur.
        </TooltipPopup>
      </Tooltip>     
    </div>
          `}
        />
      </div>
    </div>
  );
}
