import { useEffect } from "react";
import Badge from "./Badge";
import { GoDotFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import Highlight from "react-highlight";
import PreviewCode from "../../PreviewCode/Index";

export default function BadgesSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen max-w-3xl  flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Badges
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          Badges provide additional contextual information for other user
          interface (UI) elements on the page. They enable you to easily show
          statuses, notifications, and short messages in your app.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Square shape badges
        </h3>
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
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Pill shape badges
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge size="small" shape="pill">Label</Badge>
              <Badge shape="pill">Label</Badge>
              <Badge size="large" shape="pill">Label</Badge>
            </div>
          }
          code={`
          <div>  
              <Badge size="small" shape="pill">Label</Badge>
              <Badge shape="pill">Label</Badge>
              <Badge size="large" shape="pill">Label</Badge>
          </div>`}
        />
        
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Coloured badges
        </h3>
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
      
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Badges with icons
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-10">
              <Badge startIcon={<GoDotFill />}>Label</Badge>
              <Badge stopIcon={<FaXmark />}>Label</Badge>
              <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>Label</Badge>
            </div>
          }
          code={`
          <div>  
              <Badge startIcon={<GoDotFill />}>Label</Badge>
              <Badge stopIcon={<FaXmark />}>Label</Badge>
              <Badge startIcon={<GoDotFill />} stopIcon={<FaXmark />}>Label</Badge>
          </div>`}
        />
        
      </div>
    </div>
  );
}
