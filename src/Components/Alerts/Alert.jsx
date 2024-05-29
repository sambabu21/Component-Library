import classnames from "classnames";
import { PiWarningCircleBold } from "react-icons/pi";
import { PiCheckCircleBold } from "react-icons/pi";

export default function Alert({
  className,
  children,
  type ,
  title ,
  iconRequired=true,
  ...rest
}) {
  let typeClass = type && `alert-${type}`;
  const allClasses = classnames(
    typeClass,
    className,
    "sm:max-w-[90%] rounded-[12px] p-4 flex gap-4 justify-start items-start alert select-none"
  );

  let icon = <PiWarningCircleBold className="w-4 h-4"/>;
  let color = "border-[#B4B4B4]"

  if (type === "success") {
    icon = <PiCheckCircleBold className="text-[#079455] w-4 h-4"/>;
    color = "border-[#079455]"
  } else if (type === "warning") {
    icon = <PiWarningCircleBold className="text-[#DC6803] w-4 h-4"/>;
    color = "border-[#DC6803]"
  } else if (type === "error") {
    icon = <PiWarningCircleBold className="text-[#D92D20] w-4 h-4"/>;
    color = "border-[#D92D20]"
  } else if(type==="neutral"){
    icon = <PiWarningCircleBold className="text-[#1570EF] w-4 h-4"/>;
    color = "border-[#1570EF]"
  }

  return (
    <div className={allClasses} {...rest} role="alert">
     {iconRequired ? <div className={`flex justify-center items-center rounded-full border-dashed border-[3px] border-opacity-55 ${color} p-1`}>
        {icon}
      </div> : null}
      <div className="flex flex-col gap-2">
        <h1 className="text-[14px] font-medium capitalize text-[#EEEEEE]">{title}</h1>
        <p className="text-[14px] text-[#B4B4B4]">{children}</p>
      </div>
    </div>
  );
}
