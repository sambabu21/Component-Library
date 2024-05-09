import { useState } from "react";
import Button from "../Button/Button";
import Toast from "./Toast";

export default function ToastSection(){
    const [clickedElement, setClickedElement] = useState({e1:false,e2:false,e3:false,e4:false});
    const handleClick = (e) => {
        const element = e.target.name
        setClickedElement((prevElement)=>{
           return {
            ...prevElement,
            [element]:true
        }
        })
        setTimeout(() => {
            setClickedElement((prevElement)=>{
                return {
                 ...prevElement,
                 [element]:false
             }
             })
        }, 1500);
      };
    
    
    return (
        <div className="py-20 flex flex-col gap-5 border-b">
            <h1 className="text-3xl font-bold">Toasts</h1>
            <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
            <div className="flex flex-col md:flex-row  justify-around items-center gap-2">
                <div className=" flex flex-col justify-around items-center gap-2 h-52 "> 
                    <div>
                        <Button onClick={handleClick} name="e1">Click here</Button>
                        {clickedElement.e1 && <Toast title="success"  variant="success" position="lower-right">Your work has been saved</Toast>}
                    </div>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Toast title="success"  variant="success" position="lower-right">Your work has been saved</Toast>`}</h1>
                </div>
                <div className=" flex flex-col flex-wrap justify-around items-center gap-2 h-52 "> 
                    <div>
                        <Button onClick={handleClick} name="e2">Click here</Button>
                        {clickedElement.e2 &&<Toast title="Warning" variant="warning" position="lower-left">A network error was detected</Toast>}
                    </div>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Toast title="Warning" variant="warning" position="lower-left">A network error was detected</Toast>`}</h1>
                </div>
                <div className=" flex flex-col flex-wrap justify-around items-center gap-2 h-52 "> 
                    <div>
                        <Button onClick={handleClick} name="e3">Click here</Button>
                        {clickedElement.e3 && <Toast title="error" variant="error" position="upper-right">Please re-save your work again</Toast>}
                    </div>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Toast title="error" variant="error" position="upper-right">Please re-save your work again</Toast>`}</h1>
                </div>
                <div className=" flex flex-col flex-wrap justify-around items-center gap-2 h-52 "> 
                    <div>
                        <Button onClick={handleClick} name="e4">Click here</Button>
                        {clickedElement.e4 && <Toast title="Information" variant="neutral" position="upper-left">Please read updated information</Toast>}
                    </div>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-2 rounded-md">{`<Toast title="Information" variant="neutral" position="upper-left">Please read updated information</Toast>`}</h1>
                </div>
            </div>
            <h2 className="text-xl mt-5 font-semibold">Props:</h2>
            <div className="flex flex-col gap-3">
                <p className="text-md">Variant: Determines the type of toast message displayed. Eg:success, warning, error, neutral </p>
                <p className="text-md">Title: Title of the toast message </p>
                <p className="text-md">Position: Position of the toast message. Eg:upper-right,upper-left,lower-right,lower-left </p>
                <p className="text-md">Description: Decription message of the toast passed as children. </p>

            </div>
        </div>
    )
}