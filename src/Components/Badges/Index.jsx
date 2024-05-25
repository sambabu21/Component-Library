import { useEffect } from "react";
import Badge from "./Badge";
import { GoDotFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";

export default function BadgesSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Badges"
      sectionDescription="Badges provide additional contextual information for other UI elements on the page. They enable you to easily show
      statuses, notifications, and short messages in your app."
    >
      <Subheading>Square shaped badges</Subheading>
      <Subtext>
        This is the default badge. Default shape of the badge will be square.
        Default badge size will be medium.The <span className="prop">size</span>{" "}
        prop can be used to change the badge size.
      </Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge size="small">Label</Badge>
              <Badge>Label</Badge>
              <Badge size="large">Label</Badge>
            </div>
          }
          code={`<div>  
  <Badge size="small">Label</Badge>
  <Badge>Label</Badge>
  <Badge size="large">Label</Badge>
</div>`}
        />
      </SubSection>
      <Subheading>Pill shaped badges</Subheading>
      <Subtext>
        Default shape of the badge will be square. The{" "}
        <span className="prop">shape</span> prop can be used to change the badge
        shape to that of a pill.
      </Subtext>
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
          code={`<div>  
  <Badge size="small" shape="pill">Label</Badge>
  <Badge shape="pill">Label</Badge>
  <Badge size="large" shape="pill">Label</Badge>
</div>`}
        />
      </SubSection>

      <Subheading>Coloured badges</Subheading>
      <Subtext>
        The default color of the badge will be a shade of grey. Users can change
        the color of the badge using the <span className="prop">color</span>{" "}
        prop depending on the purpose the badge serves.
      </Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex flex-wrap justify-center items-center gap-10">
              <Badge color="red">Label</Badge>
              <Badge color="blue">Label</Badge>
              <Badge color="yellow">Label</Badge>
              <Badge color="green">Label</Badge>
            </div>
          }
          code={`<div>  
  <Badge color="red">Label</Badge>
  <Badge color="blue">Label</Badge>
  <Badge color="yellow">Label</Badge>
  <Badge color="green">Label</Badge>
</div>`}
        />
      </SubSection>

      <Subheading>Badges with icons</Subheading>
      <Subtext>The default will containt only the text passed in as <span className="prop">children</span> to the component. Icons can be added as inline element to the text at the start and end of the badge using the <span className="prop">startIcon</span> and <span className="prop">stopIcon</span> props.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-5 sm:gap-10">
              <Badge startIcon={<GoDotFill />}>Label</Badge>
              <Badge stopIcon={<FaXmark />}>Label</Badge>
              <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>
                Label
              </Badge>
            </div>
          }
          code={`<div>  
  <Badge startIcon={<GoDotFill />}>Label</Badge>
  <Badge stopIcon={<FaXmark />}>Label</Badge>
  <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>Label</Badge>
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}
