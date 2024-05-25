import { useEffect } from "react";
import Avatar from "./Avatar";
import proPic from "../../Assets/avatar_pic.jpeg";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";

export default function AvatarSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Avatars"
      sectionDescription="An avatar is a graphical representation of users or characters"
    >
      <Subheading>Default avatar</Subheading>
      <Subtext>This is the default avatar with the avatar icon.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-5 sm:gap-20">
              <Avatar size="small" />
              <Avatar />
              <Avatar size="large" />
            </div>
          }
          code={`<div>  
  <Avatar size="small" />
  <Avatar />
  <Avatar size="large" />
</div>`}
        />
      </SubSection>

      <Subheading>Avatars with initials</Subheading>
      <Subtext>Avatar with the initials of the individual. You can pass in the initials using the <span className="prop">children</span> prop within the Avatar tags.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-5 sm:gap-20">
              <Avatar size="small">SB</Avatar>
              <Avatar>SB</Avatar>
              <Avatar size="large">SB</Avatar>
            </div>
          }
          code={`<div>
  <Avatar size="small">SB</Avatar>
  <Avatar>SB</Avatar>
  <Avatar size="large">SB</Avatar>
</div>`}
        />
      </SubSection>
      <Subheading>Avatars with image</Subheading>
      <Subtext>Avatar with image. Image URL can be passed to the Avatar component using the <span className="prop">src</span> prop.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-5 sm:gap-20">
              <Avatar src={proPic} size="small" />
              <Avatar src={proPic} />
              <Avatar src={proPic} size="large" />
            </div>
          }
          code={`<div>
  <Avatar src={avatarImageUrl} size="small" />
  <Avatar src={avatarImageUrl} />
  <Avatar src={avatarImageUrl} size="large" />
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}
