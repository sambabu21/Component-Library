import { useContext } from "react";
import classnames from "classnames";
import { TooltipContext } from "./Tooltip";
import blackBold from "../../Assets/inbox-black-bold.png";
import blackLight from "../../Assets/inbox-black-light.png";
import blueBold from "../../Assets/inbox-blue-bold.png";
import blueLight from "../../Assets/inbox-blue-light.png";
import purpleBold from "../../Assets/inbox-purple-bold.png";
import purpleLight from "../../Assets/inbox-purple-light.png";
import greenBold from "../../Assets/inbox-green-bold.png";
import greenLight from "../../Assets/inbox-green-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TooltipPopup({ children }) {
  const {
    open,
    toggleOpen,
    title,
    color = "black",
    style = "light",
  } = useContext(TooltipContext);
  let inboxIcon = blackLight;
  let styleClass = style && color && `tool-${color}-${style}`;

  const allClasses = classnames(
    styleClass,
    "w-[300px] sm:w-[380px]  flex rounded-[8px] absolute bottom-[90px] -left-[100px] sm:left-0 tool px-5 p-3 justify-between items-center gap-2 drop-shadow-xl"
  );

  if (style === "bold") {
    if (color === "black") {
      inboxIcon = blackBold;
    } else if (color === "blue") {
      inboxIcon = blueBold;
    } else if (color === "purple") {
      inboxIcon = purpleBold;
    } else if (color === "green") {
      inboxIcon = greenBold;
    }
  } else {
    if (color === "black") {
      inboxIcon = blackLight;
    } else if (color === "blue") {
      inboxIcon = blueLight;
    } else if (color === "purple") {
      inboxIcon = purpleLight;
    } else if (color === "green") {
      inboxIcon = greenLight;
    }
  }

  return (
    <>
      {open && (
        <div className={allClasses}>
          <div className="flex justify-around items-start relative gap-3">
            <img src={inboxIcon} className="w-5 h-5 " />
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-medium text-[14px]">{title}</h1>
              <p className="text-[14px]">{children}</p>
            </div>

            <FontAwesomeIcon
              icon={faXmark}
              className="w-5 h-5 hover:cursor-pointer"
              onClick={toggleOpen}
            />
            <span
              className={classnames(
                styleClass,
                "w-5 h-5 -z-10 absolute -bottom-5 sm:left-5 rotate-45"
              )}
            ></span>
          </div>
        </div>
      )}
    </>
  );
}
