import { useState } from "react";
import Highlight from "react-highlight";
import { LuEye } from "react-icons/lu";
import { AiOutlineCode } from "react-icons/ai";

export default function PreviewCode({ component, code, onClick }) {
    const [view,setView] = useState("preview")

    const toggleView = (value) =>{
        setView(value)
    }


  return (
    <div className="w-full">
        <div className="h-12 w-full  flex mb-8 border-b border-[#484848] text-[#B4B4B4]">
            <div className={`w-[120px] flex justify-center items-center gap-1 hover:cursor-pointer hover:border-b-2 hover:text-[#EEEEEE] ${(view === "preview") ? "border-b-2 border-[#6E56CF] text-[#6E56CF] bg-[#191919]": ""}`} value="preview" onClick={()=>toggleView("preview")}>
                <LuEye />
                <h1>Preview</h1>
            </div>
            <div className={`w-[120px] flex justify-center items-center gap-1 hover:cursor-pointer hover:border-b-2 hover:text-[#EEEEEE] ${(view === "code") ? "border-b-2 border-[#6E56CF] text-[#6E56CF] bg-[#191919]": ""}`} value="code" onClick={()=>toggleView("code")}>
                <AiOutlineCode />
                <h1>Code</h1>
            </div>
        </div>
      {
        (view === "preview") &&
        <div className="min-w-full min-h-[250px] border border-[#484848] rounded-xl flex justify-center items-center gap-20 py-10 px-10" >
            {component}
        </div>
      }
      {
        (view === "code" ) &&
 
        <Highlight className="javascript rounded-xl max-h-[400px] pb-10 w-full border border-[#484848] overflow-auto">
          {code}
        </Highlight>

      }
    </div>
  );
}
