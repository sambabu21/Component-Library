import { useEffect } from "react";
import Alert from "./Alert";

export default function AlertSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90vw] md:w-[70vw] flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Alerts
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          Alerts are interactive elements that convey important information,
          warnings, or notifications to users.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Default alert
        </h3>
        <div className="w-full h-[250px] border border-[#484848] rounded-[20px] flex flex-col justify-center items-center gap-20">
          <Alert title="We've just released a new feature">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
        </div>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Alerts without icon
        </h3>
        <div className="w-full border border-[#484848] rounded-[20px] flex flex-col justify-center items-center gap-10 py-10">
          <Alert title="Update Now" type="success" iconRequired={false}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert
            title="This might be a problem"
            type="warning"
            iconRequired={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert
            title="There was a problem with that action"
            type="error"
            iconRequired={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert
            title="We've just released a new feature"
            type="neutral"
            iconRequired={false}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
        </div>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Alert with supportive text only
        </h3>
        <div className="w-full border border-[#484848] rounded-[20px] flex flex-col justify-center items-center gap-10 py-10">
          <Alert type="success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert type="warning">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert type="error">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert type="neutral">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
        </div>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Full fledged alerts with icons, title and supportive text
        </h3>
        <div className="w-full border border-[#484848] rounded-[20px] flex flex-col justify-center items-center gap-10 py-10">
          <Alert title="Update Now" type="success">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert title="This might be a problem" type="warning">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert title="There was a problem with that action" type="error">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
          <Alert title="We've just released a new feature" type="neutral">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Alert>
        </div>
      </div>
    </div>
  );
}
