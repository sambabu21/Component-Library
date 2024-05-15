import { useState } from "react";
import Button from "../Button/Button";
import Toast from "./Toast";

export default function ButtonAndToast({children,title,variant,position,description}) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <div>
      <Button runOnClick={handleClick}>
        {children}
      </Button>
      {clicked && (
        <Toast title={title} variant={variant} position={position}>
          {description}
        </Toast>
      )}
    </div>
  );
}
