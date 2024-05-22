import Card from "./Card";
import { HiOutlineGift } from "react-icons/hi2";
import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import coffeeImg from "../../Assets/Coffee.webp";
import CardActions from "./CardActions";
import Button from "../Button/Button";
import DisplaySection from "../../Common Components/DisplaySection/Index";
import Subheading from "../../Common Components/DisplaySection/Subheading";
import SubSection from "../../Common Components/DisplaySection/SubSection";

export default function CardSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <DisplaySection
      sectionTitle="Cards"
      sectionDescription="A card is a UI design pattern that groups related information in a
    flexible-size container visually resembling a playing card."
    >
      <Subheading>Default card</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Card>
                <CardTitle>Features</CardTitle>
                <CardBody>
                  Ac tincidunt sapien vehicula erat auctor pellen tesque
                  rhoncus. Et magna sit morbi lobortis.Et magna sit morbi
                  lobortis.
                </CardBody>
              </Card>
            </div>
          }
          code={`
    <div>  
      <Card>
        <CardTitle>Features</CardTitle>
        <CardBody>Ac tincidunt sapien vehicula erat auctor pellen tesque rhoncus. Et magna sit morbi lobortis.Et magna sit morbi lobortis.</CardBody>
      </Card>          
    </div>`}
        />
      </SubSection>

      <Subheading>Cards with icons</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Card icon={<HiOutlineGift />}>
                <CardTitle>Features</CardTitle>
                <CardBody>
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </CardBody>
              </Card>
            </div>
          }
          code={`
    <div>  
      <Card icon={<IconName />}>
        <CardTitle>Features</CardTitle>
        <CardBody>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</CardBody>
      </Card>          
    </div>`}
        />
      </SubSection>

      <Subheading>Cards with images</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Card image={coffeeImg}>
                <CardTitle>Coffee</CardTitle>
                <CardBody>
                  Coffee is a beverage brewed from roasted coffee beans. Darkly
                  colored, bitter, and slightly acidic, coffee has a stimulating
                  effect on humans, primarily due to its caffeine content.{" "}
                </CardBody>
              </Card>
            </div>
          }
          code={`
    <div>  
      <Card image={imageUrl}>
        <CardTitle>Coffee</CardTitle>
        <CardBody>Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content.</CardBody>
      </Card>          
    </div>`}
        />
      </SubSection>

      <Subheading>Cards with image and action buttons</Subheading>
      <SubSection>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Card image={coffeeImg}>
                <CardTitle>Coffee</CardTitle>
                <CardBody>
                  Coffee is a beverage brewed from roasted coffee beans. Darkly
                  colored, bitter, and slightly acidic, coffee has a stimulating
                  effect on humans, primarily due to its caffeine content.{" "}
                </CardBody>
                <CardActions>
                  <Button variant="text" color="yellow">SHARE</Button>
                  <Button variant="text" color="yellow">LEARN MORE</Button>
                </CardActions>
              </Card>
            </div>
          }
          code={`
    <div>  
      <Card image={imageUrl}>
        <CardTitle>Coffee</CardTitle>
        <CardBody>
          Coffee is a beverage brewed from roasted coffee beans. Darkly 
          colored, bitter, and slightly acidic, coffee has a stimulating 
          effect on humans, primarily due to its caffeine content.
        </CardBody>
        <CardActions>
          <Button variant="text" color="yellow" runOnClick={function}>SHARE</Button>
          <Button variant="text" color="yellow" runOnClick={function}>LEARN MORE</Button>
        </CardActions>
      </Card>          
    </div>`}
        />
      </SubSection>
    </DisplaySection>
  );
}

{
  /*
        
  
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          
        </h3>

        
      </div>
    </div> */
}
