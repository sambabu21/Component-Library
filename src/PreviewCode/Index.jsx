import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { AiOutlineCode } from "react-icons/ai";
import { CopyBlock, hybrid } from "react-code-blocks";

export default function PreviewCode({ component, code, onClick }) {
  const [view, setView] = useState("preview");

  const toggleView = (value) => {
    setView(value);
  };

  return (
    <div className="w-full">
      <div className="h-12 w-[300px] sm:w-full mx-auto flex sm:mb-8 border-b border-[#484848] text-[#B4B4B4]">
        <div
          className={`w-[150px] sm:w-[120px] flex justify-center items-center gap-1 hover:cursor-pointer hover:border-b-2 hover:text-[#EEEEEE] ${
            view === "preview"
              ? "border-b-2 border-[#6E56CF] text-[#6E56CF] bg-[#191919]"
              : ""
          }`}
          value="preview"
          onClick={() => toggleView("preview")}
        >
          <LuEye />
          <h1>Preview</h1>
        </div>
        <div
          className={`w-[150px] sm:w-[120px] flex justify-center items-center gap-1 hover:cursor-pointer hover:border-b-2 hover:text-[#EEEEEE] ${
            view === "code"
              ? "border-b-2 border-[#6E56CF] text-[#6E56CF] bg-[#191919]"
              : ""
          }`}
          value="code"
          onClick={() => toggleView("code")}
        >
          <AiOutlineCode />
          <h1>Code</h1>
        </div>
      </div>
      {view === "preview" && (
        <div className="w-[300px] sm:min-w-full min-h-[250px] border border-[#484848] rounded-b-xl sm:rounded-xl flex justify-center items-center sm:gap-20 py-10 px-10 mx-auto">
          {component}
        </div>
      )}
      {view === "code" && (
        // <Highlight className="javascript rounded-xl max-h-[400px] pb-10 w-full border border-[#484848] overflow-auto">
        //   {code}
        // </Highlight>
        <div className="plex text-[14px] w-[300px] mx-auto sm:w-full">
          <CopyBlock
            text={code}
            language={"jsx"}
            showLineNumbers={true}
            theme={hybrid}
            codeBlock
            className="plex"
          />
        </div>
      )}
    </div>
  );
}
