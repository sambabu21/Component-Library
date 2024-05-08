import classnames from "classnames";
import successImg from "../../Assets/success.png"
import warningImg from "../../Assets/warning.png"
import errorImg from "../../Assets/error.png"
import neutralImg from "../../Assets/neutral.png"

export default function Banner({
  className,
  children,
  type = "success",
  title="title-text",
  ...rest
}) {
  let typeClass = type && `banner-${type}`;
  const allClasses = classnames(
    typeClass,
    className,
    "w-[896px] rounded-[6px] p-5 flex gap-2 justify-start items-start"
  );

  let imgSrc = successImg
  if (type==="success"){
    imgSrc = successImg
  }else if(type === "warning"){
    imgSrc = warningImg
  }else if(type === "error"){
    imgSrc = errorImg
  }else{
    imgSrc = neutralImg
  }

  return <div className={allClasses} {...rest}>
    <img src={imgSrc} className="w-4 h-4"/>
    <div>
        <h1 className="font-medium capitalize">{title}</h1>
        <p>{children}</p>
    </div>
  </div>;
}
