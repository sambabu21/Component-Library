import useToggle from "../../Custom Hooks/useToggle";
import { FaCheck, FaStar, FaThumbsUp } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { PiArrowFatUp, PiArrowFatUpFill } from "react-icons/pi";

export default function Toggle({
  onToggle,
  type = "switch",
  defaultChecked,
  disabled,
}) {
  const [open, toggleOpen] = useToggle({
    initialValue: defaultChecked ? true : false,
    onToggle: onToggle,
  });

  if (type === "switch") {
    return (
      <button
        className={`w-10 h-4  rounded-full flex items-center hover:cursor-pointer ${
          disabled ? "pointer-events-none " : ""
        } ${open ? "bg-[#6e56cf4b]" : "bg-[#3A3A3A]"}`}
        onClick={toggleOpen}
      >
        <span
          className={`w-6 h-6 rounded-full  ${
            open
              ? "transition-all translate-x-5 bg-[#6E56CF]"
              : "transition-all -translate-x-1 bg-[#B4B4B4]"
          }`}
        ></span>
      </button>
    );
  } else if (type === "checkbox") {
    return (
      <button
        role="checkbox"
        className={`w-6 h-6 flex justify-center items-center hover:cursor-pointer rounded-[4px] ${
          disabled ? "pointer-events-none" : ""
        } ${open ? "border-0 bg-[#6E56CF]" : "border border-[#B4B4B4]"}`}
        onClick={toggleOpen}
      >
        <FaCheck className={`w-4 h-4 ${open ? "" : "hidden"}`} />
      </button>
    );
  } else if (type === "heart") {
    return open ? (
      <button onClick={toggleOpen}>
        <FaHeart className="w-6 h-6 text-[#6E56CF]" />
      </button>
    ) : (
      <button onClick={toggleOpen}>
        <FaRegHeart className={`w-6 h-6 text-[#6E56CF]`} />
      </button>
    );
  } else if (type === "star") {
    return open ? (
      <button onClick={toggleOpen}>
        <FaStar className="w-6 h-6 text-[#6E56CF]" />
      </button>
    ) : (
      <button onClick={toggleOpen}>
        <FaRegStar className={`w-6 h-6 text-[#6E56CF]`} />
      </button>
    );
  } else if (type === "like") {
    return open ? (
      <button onClick={toggleOpen}>
        <FaThumbsUp className="w-6 h-6 text-[#6E56CF]" />
      </button>
    ) : (
      <button onClick={toggleOpen}>
        <FaRegThumbsUp className={`w-6 h-6 text-[#6E56CF]`} />
      </button>
    );
  } else if (type === "upvote") {
    return open ? (
      <button onClick={toggleOpen}>
        <PiArrowFatUpFill className="w-6 h-6 text-[#6E56CF]" />
      </button>
    ) : (
      <button onClick={toggleOpen}>
        <PiArrowFatUp className={`w-6 h-6 text-[#6E56CF]`} />
      </button>
    );
  }
}
