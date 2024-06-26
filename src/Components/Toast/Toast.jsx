import classnames from "classnames";
import { PiWarningCircleBold } from "react-icons/pi";
import { PiCheckCircleBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function Toast({
  children,
  className,
  clicked,
  position = "bottom",
  title,
  variant,
  ...rest
}) {
  let variantClass = variant && `toast-${variant}`;
  let positionClass = position && `toast-${position}`;
  const allClasses = classnames(
    variantClass,
    positionClass,
    className,
    "w-[300px] rounded-[6px] px-5 py-3 flex gap-2 justify-start items-start drop-shadow-xl toast z-40"
  );


  let icon = <PiWarningCircleBold className="w-4 h-4"/>;
  if (variant === "success") {
    icon = <PiCheckCircleBold className="text-[#EEEEEE] w-4 h-4"/>;
    
  } else if (variant === "warning") {
    icon = <PiWarningCircleBold className="text-[#EEEEEE] w-4 h-4"/>;
    
  } else if (variant === "error") {
    icon = <PiWarningCircleBold className="text-[#EEEEEE] w-4 h-4"/>;
    
  } else if(variant==="info"){
    icon = <PiWarningCircleBold className="text-[#EEEEEE] w-4 h-4"/>;
    
  }


  return (
    <motion.div 
      initial={{opacity:0,y:40}}
      animate={{opacity:1,y:0,transition:{duration:0.2}}}
      exit={{opacity:0,y:100,transition:{duration:0.2}}}
    className={allClasses} {...rest}>
      {/* <img src={imgSrc} className="w-4 h-4" /> */}
      <div className="flex justify-center items-center rounded-full border-dashed border-[3px] border-opacity-55 border-[#EEEEEE] p-1">
        {icon}
      </div>
      <div>
        <h1 className="font-medium capitalize text-[14px]">{title}</h1>
        <p className="text-[14px]">{children}</p>
      </div>
    </motion.div>
  );
}
