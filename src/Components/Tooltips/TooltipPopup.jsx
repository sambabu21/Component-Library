import { useContext } from "react";
import classnames from "classnames";
import { TooltipContext } from "./Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function TooltipPopup({ children }) {
  const {
    open,
    toggleOpen,
    title,
    position
  } = useContext(TooltipContext);

  let positionClass = "top"

  positionClass = position && `tool-${position}`
  let positionArrowClass = position && `tool-${position}-arrow`


  const allClasses = classnames(
    positionClass,
    "w-[280px] sm:max-w-[380px]  flex rounded-[8px] absolute bottom-[60px] left-1/2 -translate-x-[50%] tool px-5 p-3 justify-between items-center gap-2 drop-shadow-xl"
  );

  return (
    <>
      {open && (
        <div className={allClasses}>
          <div className="flex justify-around items-start relative gap-3">
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-semibold text-[12px]">{title}</h1>
              <p className="text-[12px]">{children}</p>
            </div>

            <span
              className={classnames(
                positionArrowClass,
                "w-5 h-5 -z-10 absolute -bottom-5 left-1/2 -translate-x-[50%] rotate-45 bg-[#6E56CF]"
              )}
            ></span>
          </div>
        </div>
      )}
    </>
  );
}
