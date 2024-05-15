import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";
import Button from "./Button";

export default function ButtonSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex justify-center items-center">
      <div className="max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Buttons
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          Buttons communicate actions that users can take. They are typically
          placed throughout your UI, in places like: Dialogs, Forms, Toolbars,
          etc.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Button types
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button variant="outline">Outline</Button>
              <Button>Filled</Button>
              <Button variant="text">Text</Button>
            </div>
          }
          code={`
          <div>
            <Button variant="outline">Outline</Button>
            <Button>Filled</Button>
            <Button variant="text">Text</Button>
          </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default filled button
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button>Filled</Button>
              <Button isDisabled={true}>Disabled</Button>
            </div>
          }
          code={`
          <div>
            <Button>Filled</Button>
            <Button isDisabled={true}>Disabled</Button>
          </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Outlined button
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button variant="outline">Outlined</Button>
              <Button isDisabled={true} variant="outline">
                Disabled
              </Button>
            </div>
          }
          code={`
          <div>
            <Button variant="outline">Outlined</Button>
            <Button isDisabled={true} variant="outline">Disabled</Button>
          </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Text button
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10 w-full">
              <Button variant="text">Text</Button>
              <Button isDisabled={true} variant="text">
                Disabled
              </Button>
            </div>
          }
          code={`
          <div>
            <Button variant="text">Text</Button>
            <Button isDisabled={true} variant="text">Disabled</Button>
          </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Colored buttons
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <div className="flex justify-center items-center gap-10">
                <Button color="red">Red</Button>
                <Button color="blue">Blue</Button>
                <Button color="green">Green</Button>
                <Button color="yellow">Yellow</Button>
              </div>
              <div className="flex justify-center items-center gap-10">
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
              <div className="flex justify-center items-center gap-10">
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
          code={`
          <div>
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
          </div>
          `}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Button sizes
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center flex-col items-center gap-10 w-full">
              <div className="flex justify-center items-center gap-10">
                <Button size="small">Small</Button>
                <Button>Medium</Button>
                <Button size="large">Large</Button>
              </div>
              <div className="flex justify-center items-center gap-10">
                <Button variant="outline" size="small">
                  Small
                </Button>
                <Button variant="outline">Medium</Button>
                <Button variant="outline" size="large">
                  Large
                </Button>
              </div>
              <div className="flex justify-center items-center gap-10">
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
          code={`
          <div>
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
          </div>
          `}
        />
      </div>
    </div>
  );
}
