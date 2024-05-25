import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";
import TooltipClick from "./TooltipHover";
import TooltipPopup from "./TooltipPopup";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";

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
      <Subtext>Default tooltip which hovers directly over the element. Use<span className="prop">Title</span> prop to set the title of the tooltip message. Use<span className="prop">TooltipClick</span> to pass in the element on which the tooltip should be toggled. Use<span className="prop">TooltipPopup</span> and pass the tooltip text as <span className="prop">children</span> to it.</Subtext>
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
      <Subtext>Use the <span className="prop">position</span> prop to alignment of the tooltip with respect to the element.</Subtext>
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


