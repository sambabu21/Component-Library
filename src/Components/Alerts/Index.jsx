import { useEffect } from "react";
import Alert from "./Alert";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";

export default function AlertSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Alerts"
      sectionDescription="Alerts are interactive elements that convey important information,
      warnings, or notifications to users."
    >
      <Subheading>Default alert</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Alert title="We've just released a new feature">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
            </div>
          }
          code={
`<div>
  <Alert title="We've just released a new feature"> {Alert Text} </Alert>
</div>`}
        />
      </SubSection>

      <Subheading>Alerts without icon</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <Alert title="Update Now" type="success" iconRequired={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert
                title="This might be a problem"
                type="warning"
                iconRequired={false}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert
                title="There was a problem with that action"
                type="error"
                iconRequired={false}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert
                title="We've just released a new feature"
                type="neutral"
                iconRequired={false}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
            </div>
          }
          code={
`<div>
  <Alert title="Update Now" type="success" iconRequired={false}> {Alert Text} </Alert>
  <Alert title="This might be a problem" type="warning" iconRequired={false}> {Alert Text} </Alert>
  <Alert title="There was a problem with that action" type="error" iconRequired={false}> {Alert Text} </Alert>
  <Alert title="We've just released a new feature" type="neutral" iconRequired={false}> {Alert Text} </Alert>
</div>`}
        />
      </SubSection>

      <Subheading>Alert with supportive text only</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-col justify-center items-center gap-10 w-full">
              <Alert type="success">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert type="warning">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert type="error">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert type="neutral">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
            </div>
          }
          code={
`<div>
  <Alert type="success"> {Alert Text} </Alert>
  <Alert type="warning"> {Alert Text} </Alert>
  <Alert type="error"> {Alert Text} </Alert>
  <Alert type="neutral"> {Alert Text} </Alert>
</div>`}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Full fledged alerts with icons, title and supportive text
        </h3>
        <PreviewCode
          component={
            <div className="flex flex-col justify-center items-center gap-10 w-full">
              <Alert title="Update Now" type="success">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert title="This might be a problem" type="warning">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert title="There was a problem with that action" type="error">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
              <Alert title="We've just released a new feature" type="neutral">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Alert>
            </div>
          }
          code={
`<div>
  <Alert title="Update Now" type="success"> {Alert Text} </Alert>
  <Alert title="This might be a problem" type="warning"> {Alert Text} </Alert>
  <Alert title="There was a problem with that action" type="error"> {Alert Text} </Alert>
  <Alert title="We've just released a new feature" type="neutral"> {Alert Text} </Alert>
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}
