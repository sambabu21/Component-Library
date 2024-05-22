import { useEffect } from "react";
import Badge from "./Badge";
import { GoDotFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";

export default function BadgesSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Badges"
      sectionDescription="Badges provide additional contextual information for other user
      interface (UI) elements on the page. They enable you to easily show
      statuses, notifications, and short messages in your app."
    >
      <Subheading>Square shaped badges</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge size="small">Label</Badge>
              <Badge>Label</Badge>
              <Badge size="large">Label</Badge>
            </div>
          }
          code={`
    <div>  
        <Badge size="small">Label</Badge>
        <Badge>Label</Badge>
        <Badge size="large">Label</Badge>
    </div>`}
        />
      </SubSection>
      <Subheading>Pill shaped badges</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge size="small" shape="pill">
                Label
              </Badge>
              <Badge shape="pill">Label</Badge>
              <Badge size="large" shape="pill">
                Label
              </Badge>
            </div>
          }
          code={`
    <div>  
        <Badge size="small" shape="pill">Label</Badge>
        <Badge shape="pill">Label</Badge>
        <Badge size="large" shape="pill">Label</Badge>
    </div>`}
        />
      </SubSection>

      <Subheading>Coloured badges</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge color="red">Label</Badge>
              <Badge color="blue">Label</Badge>
              <Badge color="yellow">Label</Badge>
              <Badge color="green">Label</Badge>
            </div>
          }
          code={`
    <div>  
        <Badge color="red">Label</Badge>
        <Badge color="blue">Label</Badge>
        <Badge color="yellow">Label</Badge>
        <Badge color="green">Label</Badge>
    </div>`}
        />
      </SubSection>

      <Subheading>Badges with icons</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge startIcon={<GoDotFill />}>Label</Badge>
              <Badge stopIcon={<FaXmark />}>Label</Badge>
              <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>
                Label
              </Badge>
            </div>
          }
          code={`
    <div>  
        <Badge startIcon={<GoDotFill />}>Label</Badge>
        <Badge stopIcon={<FaXmark />}>Label</Badge>
        <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>Label</Badge>
    </div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}

