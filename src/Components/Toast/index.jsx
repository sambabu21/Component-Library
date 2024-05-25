import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import ButtonAndToast from "./ButtonAndToast";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";

export default function ToastSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Toasts"
      sectionDescription="Toasts display brief, temporary notifications. They're meant to be
    noticed without disrupting a user's experience or requiring an action
    to be taken."
    >
      <Subheading>Default Toast</Subheading>
      <Subtext>Default toast are of neutral shades. Use <span className="prop">title</span> prop to pass in a toast message title. Use <span className="prop">children</span> prop to pass in the supportive text.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <ButtonAndToast
              title="Success"
              description="Successfully updated your profile"
            >
              Show Toast
            </ButtonAndToast>
          }
          code={
`<div>
    <Toast title="Success">Successfully updated your profile</Toast>
</div>`}
        />
      </SubSection>

      <Subheading>Types of toasts</Subheading>
      <Subtext>Use the <span className="prop">variant</span> prop to change the nature of the toast message.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-wrap gap-20 px-20 justify-center items-center">
              <ButtonAndToast
                title="Update success"
                description="Successfully updated your profile"
                variant="success"
              >
                Show success toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Something went wrong"
                description="Please re-save your work again"
                variant="error"
              >
                Show error toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Warning"
                description="A network error was detected"
                variant="warning"
              >
                Show warning toast
              </ButtonAndToast>
              <ButtonAndToast
                title="New update available"
                description="Please read updated information"
                variant="info"
              >
                Show info toast
              </ButtonAndToast>
            </div>
          }
          code={
`<div>
    <Toast title="Update success" variant="success">Successfully updated your profile</Toast>
    <Toast title="Something went wrong" variant="error">Please re-save your work again</Toast>
    <Toast title="Warning" variant="warning">A network error was detected</Toast>
    <Toast title="New update available" variant="info">Successfully updated your profile</Toast>
</div>`}
        />
      </SubSection>

      <Subheading>Toast positioning</Subheading>
      <Subtext>Use the <span className="prop">position</span> prop to change the position of the toast with respect to the window.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-wrap gap-20 px-20 justify-center items-center">
              <ButtonAndToast
                title="Bottom toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom"
              >
                Bottom toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Bottom-left toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom-left"
              >
                Bottom-left toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top-left toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top-left"
              >
                Top-left toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top"
              >
                Top toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Top-right toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="top-right"
              >
                Top-right toast
              </ButtonAndToast>
              <ButtonAndToast
                title="Bottom-right toast"
                description="Lorem ipsum dolor sit amet"
                variant="success"
                position="bottom-right"
              >
                Bottom-right toast
              </ButtonAndToast>
            </div>
          }
          code={
`<div>
    <Toast title="Bottom toast" variant="success" position="bottom">Lorem ipsum dolor sit amet</Toast>
    <Toast title="Bottom-left toast" variant="success" position="bottom-left">Lorem ipsum dolor sit amet</Toast>
    <Toast title="Top-left toast" variant="success" position="top-left">Lorem ipsum dolor sit amet</Toast>
    <Toast title="Top toast" variant="success" position="top">Lorem ipsum dolor sit amet</Toast>
    <Toast title="Top-right toast" variant="success" position="top-right">Lorem ipsum dolor sit amet</Toast>
    <Toast title="Bottom-right toast" variant="success" position="bottom-right">Lorem ipsum dolor sit amet</Toast>
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}
