import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";
import TooltipClick from "./TooltipHover";
import TooltipPopup from "./TooltipPopup";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";

export default function TooltipSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Tooltips"
      sectionDescription="A tooltip is a brief, informative message that appears when a user
    interacts with an element."
    >
      <Subheading>Default tooltip</Subheading>
      <SubSection>
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
          code={
`<div>
<Tooltip title="Archive notes" color="blue">
  <TooltipClick>
      <Button variant="text">Hover here</Button>
  </TooltipClick>
  <TooltipPopup>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipPopup>
</Tooltip>             
</div>`}
        />
      </SubSection>

      <Subheading>Tooltip position</Subheading>
      <SubSection>
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
          code={
`<div>
<Tooltip title="Archive notes">
  <TooltipClick>
    <Button variant="text">Hover</Button>
  </TooltipClick>
  <TooltipPopup>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipPopup>
</Tooltip>
<Tooltip title="Archive notes" position="top-left/top-right/left/right/bottom/bottom-left/bottom-right">
  <TooltipClick>
    <Button variant="text">Hover</Button>
  </TooltipClick>
  <TooltipPopup>Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.</TooltipPopup>
</Tooltip>     
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}

{
  /* 
  
  <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
    
  </h3>
  
</div>
</div> */
}
