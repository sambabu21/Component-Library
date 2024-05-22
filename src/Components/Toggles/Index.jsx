import { useEffect } from "react";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import PreviewCode from "../../PreviewCode/Index";
import Toggle from "./Toggle";

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
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-20">
                <Toggle />
                <Toggle defaultChecked />
              </div>
            }
            code={`
<div>  
    <Toggle />
    <Togggle defaultChecked />
</div>`}
          />
        </SubSection>
  
        <Subheading>Checkbox</Subheading>
        <SubSection>
          <PreviewCode
            component={
              <div className="flex justify-center items-center gap-20">
                <Toggle type="checkbox"/>
                <Toggle type="checkbox" defaultChecked />
              </div>
            }
            code={`
<div>  
    <Togggle type="checkbox"/>
    <Togggle type="checkbox" defaultChecked />
</div>`}
          />
        </SubSection>
        <Subheading>Social media toggles</Subheading>
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
            code={`
<div>  
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