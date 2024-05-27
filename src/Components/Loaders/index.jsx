import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Loader from "./Loader";
import Subtext from "../../Common Components/DisplaySection/Subtext";
import Proptable from "../../Common Components/DisplaySection/Proptable";

export default function LoaderSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const propstable = [{
    name:"type",
    value : [`"dots"`,`"dotspin"`],
    default : "medium"
  }]

  return (
    <DisplaySection
      sectionTitle="Loaders"
      sectionDescription="Loaders inform the user of a loading or computing processes being carried out by the system. "
    >
      <Subheading>Default loader</Subheading>
      <Subtext>Default circle shaped loader.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
                <Loader />
            </div>
          }
          code={
`<div>  
    <Loader />
</div>`}
        />
      </SubSection>

      <Subheading>Loader types</Subheading>
      <Subtext>Use the <span className="prop">type</span> prop to change the style of loader.</Subtext>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 sm:gap-20">
                <Loader />
                <Loader type="dots"/>
                <Loader type="dotspin"/>
            </div>
          }
          code={
`<div>  
    <Loader />
    <Loader type="dots"/>
    <Loader type="dotspin"/>
</div>`}
        />
      </SubSection>
     <Proptable propstable={propstable}/>
    </DisplaySection>
  )
}
