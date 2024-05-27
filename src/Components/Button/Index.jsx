import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import Button from "./Button";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";
import Proptable from "../../Common Components/DisplaySection/Proptable";

export default function ButtonSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propstable = [{
    name:"variant",
    value : [`"outline"`,`"text"`],
    default : "filled"
  },{
    name:"isDisabled",
    value: ["Boolean"],
    default:"false"
  },{
    name:"color",
    value: [`"red"`,`"blue"`,`"yellow"`,`"green"`],
    default:"/"
  },{
    name:"size",
    value: [`"small"`,`"large"`],
    default:"/"
  }]

  return (
    <DisplaySection
      sectionTitle="Buttons"
      sectionDescription="Buttons communicate actions that users can take. They are typically
    placed throughout your UI, in places like: Dialogs, Forms, Toolbars,
    etc."
    >
      <Subheading>Button variants</Subheading>
      <Subtext>Default button is a filled button with a solid background. Use the <span className="prop">variant</span> prop to change the type of button.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-wrap justify-center items-center gap-10 w-full">
              <Button variant="outline">Outline</Button>
              <Button>Filled</Button>
              <Button variant="text">Text</Button>
            </div>
          }
          code={`<div>
  <Button variant="outline">Outline</Button>
  <Button>Filled</Button>
  <Button variant="text">Text</Button>
</div>`}
        />
      </SubSection>

      <Subheading>Default filled button</Subheading>
      <Subtext>Default filled button. Pass in the <span className="prop">isDisabled</span> prop to disable actions on the buttons.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button>Filled</Button>
              <Button isDisabled>Disabled</Button>
            </div>
          }
          code={`<div>
  <Button>Filled</Button>
  <Button isDisabled={true}>Disabled</Button>
</div>`}
        />
      </SubSection>

      <Subheading>Outlined button</Subheading>
      <Subtext>Outlined button. Pass in the <span className="prop">isDisabled</span> prop to disable actions on the buttons.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button variant="outline">Outlined</Button>
              <Button isDisabled variant="outline">
                Disabled
              </Button>
            </div>
          }
          code={`<div>
  <Button variant="outline">Outlined</Button>
  <Button isDisabled={true} variant="outline">Disabled</Button>
</div>`}
        />
      </SubSection>

      <Subheading>Text button</Subheading>
      <Subtext>Text button. Pass in the <span className="prop">isDisabled</span> prop to disable actions on the buttons.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button variant="text">Text</Button>
              <Button isDisabled variant="text">
                Disabled
              </Button>
            </div>
          }
          code={`<div>
  <Button variant="text">Text</Button>
  <Button isDisabled={true} variant="text">Disabled</Button>
</div>`}
        />
      </SubSection>

      <Subheading>Colored buttons</Subheading>
      <Subtext>Use the <span className="prop">color</span> prop to change the color of the button depending on your need.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <div className="flex flex-wrap justify-center items-center gap-10">
                <Button color="red">Red</Button>
                <Button color="blue">Blue</Button>
                <Button color="green">Green</Button>
                <Button color="yellow">Yellow</Button>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <Button variant="outline" color="red">
                  Red
                </Button>
                <Button variant="outline" color="blue">
                  Blue
                </Button>
                <Button variant="outline" color="green">
                  Green
                </Button>
                <Button variant="outline" color="yellow">
                  Yellow
                </Button>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <Button variant="text" color="red">
                  Red
                </Button>
                <Button variant="text" color="blue">
                  Blue
                </Button>
                <Button variant="text" color="green">
                  Green
                </Button>
                <Button variant="text" color="yellow">
                  Yellow
                </Button>
              </div>
            </div>
          }
          code={`<div>
  <div>
    <Button color="red">Red</Button>
    <Button color="blue">Blue</Button>
    <Button color="green">Green</Button>
    <Button color="yellow" >Yellow</Button>
  </div>
  <div>
    <Button variant="outline" color="red">Red</Button>
    <Button variant="outline" color="blue">Blue</Button>
    <Button variant="outline" color="green">Green</Button>
    <Button variant="outline" color="yellow" >Yellow</Button>
  </div>
  <div>
    <Button variant="text" color="red">Red</Button>
    <Button variant="text" color="blue">Blue</Button>
    <Button variant="text" color="green">Green</Button>
    <Button variant="text" color="yellow" >Yellow</Button>
  </div>
</div>`}
        />
      </SubSection>

      <Subheading>Button sizes</Subheading>
      <Subtext>Use the <span className="prop">size</span> prop to change the size of the button.Default size is medium.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <div className="flex justify-center items-center gap-2 sm:gap-10">
                <Button size="small">Small</Button>
                <Button>Medium</Button>
                <Button size="large">Large</Button>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-10">
                <Button variant="outline" size="small">
                  Small
                </Button>
                <Button variant="outline">Medium</Button>
                <Button variant="outline" size="large">
                  Large
                </Button>
              </div>
              <div className="flex justify-center items-center gap-2 sm:gap-10">
                <Button variant="text" size="small">
                  Small
                </Button>
                <Button variant="text">Medium</Button>
                <Button variant="text" size="large">
                  Large
                </Button>
              </div>
            </div>
          }
          code={`<div>
  <div>
    <Button size="small">Small</Button>
    <Button>Medium</Button>
    <Button size="large">Large</Button>
  </div>
  <div>
    <Button variant="outline" size="small">Small</Button>
    <Button variant="outline">Medium</Button>
    <Button variant="outline" size="large">Large</Button>
  </div>
  <div>
    <Button variant="text" size="small">Small</Button>
    <Button variant="text">Medium</Button>
    <Button variant="text" size="large">Large</Button>
  </div>
</div>`}
        />
      </SubSection>
      <Proptable propstable={propstable}/>
    </DisplaySection>
  );
}
