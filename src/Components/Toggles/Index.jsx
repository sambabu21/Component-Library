import { useEffect } from "react";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import PreviewCode from "../../PreviewCode/Index";
import Toggle from "./Toggle";
import Subtext from "../../Common Components/DisplaySection/Subtext";

export default function ToggleSection() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <DisplaySection
        sectionTitle="Toggles"
        sectionDescription="A toggle is a user interface element that allows users to switch between two or more states or options."
      >
        <Subheading>Default switch toggle</Subheading>
        <Subtext>Default toggle component. Use the <span className="prop">defaultChecked</span> prop to set the default state of the switch as on.</Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-20">
                <Toggle />
                <Toggle defaultChecked />
              </div>
            }
            code={
`<div>  
    <Toggle />
    <Togggle defaultChecked />
</div>`}
          />
        </SubSection>
  
        <Subheading>Checkbox</Subheading>
        <Subtext>Use the <span className="prop">type</span> prop to change the switch to a checkbox.</Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-20">
                <Toggle type="checkbox"/>
                <Toggle type="checkbox" defaultChecked />
              </div>
            }
            code={
`<div>  
    <Togggle type="checkbox"/>
    <Togggle type="checkbox" defaultChecked />
</div>`}
          />
        </SubSection>
        <Subheading>Social media toggles</Subheading>
        <Subtext>Use the <span className="prop">type</span> prop to change the switch to toggles commonly used in social media apps.</Subtext>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-20">
                <Toggle type="heart"/>
                <Toggle type="star"/>
                <Toggle type="like"/>
                <Toggle type="upvote"/>
              </div>
            }
            code={
`<div>  
    <Toggle type="heart"/>
    <Toggle type="star"/>
    <Toggle type="like"/>
    <Toggle type="upvote"/>
</div>`}
          />
        </SubSection>
      </DisplaySection>
    )
  }