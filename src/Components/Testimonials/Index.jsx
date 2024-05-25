import Testimonial from "./Testimonial";
import profileImg from "../../Assets/avatar_pic.jpeg";
import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Subtext from "../../Common Components/DisplaySection/Subtext";

export default function TestimonialsSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Testimonials"
      sectionDescription="A testimonial is an honest endorsement of your product or service that
      usually comes from a customer, colleague, or peer who has benefited
      from or experienced success as a result of the work you did for them."
    >
      <Subheading>Basic testimonial</Subheading>
      <Subtext> Default testimonial card with dark theme.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.
              </Testimonial>
            </div>
          }
          code={
`<div>  
  <Testimonial name="May Andersons" title="CTO" company="Workcation">
    Defix UI is one of the best libraries I've came across. Good
    looking, easy to use and above all super accessible.
  </Testimonial>
</div>`}
        />
      </SubSection>

      <Subheading>Testimonial with image</Subheading>
      <Subtext>Use the <span className="prop">imageUrl</span> prop to pass in the image URL of the individual.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                imageUrl={profileImg}
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.
              </Testimonial>
            </div>
          }
          code={
`<div>  
  <Testimonial imageUrl={profileImg} name="May Andersons" title="CTO" company="Workcation">
    Defix UI is one of the best libraries I've came across. Good
    looking, easy to use and above all super accessible.{" "}
  </Testimonial>
</div>`}
        />
      </SubSection>

      <Subheading>Testimonial in light mode</Subheading>
      <Subtext>Pass the <span className="prop">lightMode</span> prop to change the theme of the testimonial card to a light theme.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                lightMode
                imageUrl={profileImg}
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.{" "}
              </Testimonial>
            </div>
          }
          code={
`<div>  
  <Testimonial
      lightMode
      imageUrl={profileImg}
      name="May Andersons"
      title="CTO"
      company="Workcation"
  >
    Defix UI is one of the best libraries I've came across. Good
    looking, easy to use and above all super accessible.{" "}
  </Testimonial>
</div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}
