import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";
import Loader from "./Loader";

export default function LoaderSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Loaders"
      sectionDescription="Loaders inform the user of a loading or computing processes being carried out by the system. "
    >
      <Subheading>Default loader</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
                <Loader />
            </div>
          }
          code={`
<div>  
    <Loader />
</div>`}
        />
      </SubSection>

      <Subheading>Loader types</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
                <Loader />
                <Loader type="dots"/>
                <Loader type="dotspin"/>
            </div>
          }
          code={`
<div>  
    <Loader />
</div>`}
        />
      </SubSection>
     
    </DisplaySection>
  )
}
