import classnames from "classnames";
import successImg from "../../Assets/success.png";
import warningImg from "../../Assets/warning.png";
import errorImg from "../../Assets/error.png";
import neutralImg from "../../Assets/neutral.png";
import Button from "../Button/Button";
import { useState } from "react";

export default function Toast({
  children,
  className,
  clicked,
  position = "lower-right",
  title,
  variant = "success",
  ...rest
}) {
  let variantClass = variant && `toast-${variant}`;
  let positionClass = position && `toast-${position}`;
  const allClasses = classnames(
    variantClass,
    positionClass,
    className,
    "w-[380px] rounded-[6px] p-5 flex gap-2 justify-start items-start drop-shadow-xl"
  );

  let imgSrc = successImg;
  if (variant === "success") {
    imgSrc = successImg;
  } else if (variant === "warning") {
    imgSrc = warningImg;
  } else if (variant === "error") {
    imgSrc = errorImg;
  } else {
    imgSrc = neutralImg;
  }

  return (
    <div className={allClasses} {...rest}>
      <img src={imgSrc} className="w-4 h-4" />
      <div>
        <h1 className="font-medium capitalize">{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}
