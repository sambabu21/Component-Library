import { useEffect } from "react";
import ComponentContainer from "./ComponentContainer";
import { FaRegHandPointer } from "react-icons/fa";

export default function Components() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen w-full lg:w-[768px] flex flex-col justify-center items-center sm:items-start py-20  ">
      <h1 className="text-2xl sm:text-4xl font-bold tracking-tighter text-[#EEEEEE]">
        Defix UI components
      </h1>
      <p className=" mt-5 text-[#B4B4B4] tracking-normal leading-[1.6] px-5 sm:px-0">
        Defix UI aims to provide building blocks for developers to create great
        user interfaces using prebuilt components.
      </p>
      <div className="flex flex-col justify-center items-start my-10">
        <h1 className="font-semibold text-lg md:text-2xl mb-10 text-[#EEEEEE] tracking-tight">
          General
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[300px] sm:w-full">
          <ComponentContainer title="Avatars">
            <div className="w-[50px] h-[50px] border-2 border-[#BAA7FF] rounded-full flex justify-center items-center">
              <h1 className="text-[#BAA7FF]">SB</h1>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Badges">
            <div className="w-[60px] h-[60px] border-2 border-[#e2ddfe54] bg-[#e2ddfe2d] rounded-full flex justify-center items-center relative">
              <div className="w-[70px] h-[30px] border border-[#BAA7FF] rounded-lg absolute left-[60%] top-[60%] bg-[#111111] z-20 flex justify-center items-center gap-2">
                <span className="w-[5px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
                <span className="w-[30px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
              </div>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Buttons">
            <div className=" px-[20px] py-[15px] flex justify-center items-center border rounded-[8px] border-[#BAA7FF]">
              <div className="w-[60px] h-[4px] bg-[#BAA7FF] rounded-full"></div>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Loaders">
              <div className="w-[40px] h-[40px] rounded-full border-4 border-[#e2ddfe2d] border-r-[#BAA7FF]"></div>
          </ComponentContainer>
          <ComponentContainer title="Menu">
            <div className="flex flex-col gap-2">
              <div className="w-[70px] h-[20px] rounded-[5px] border border-[#7B7B7B] flex justify-center items-center">
                <span className="w-[50px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
              </div>
              <div className="w-[180px] h-[64px] rounded-[5px] border border-[#BAA7FF] ">
                <div className="h-1/3  rounded-t-[3px] bg-[#e2ddfe34] flex justify-center items-center">
                  <span className="w-[100px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
                </div>
                <div className="h-1/3  flex justify-center items-center">
                  <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                </div>
                <div className="h-1/3 flex justify-center items-center">
                  <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                </div>
              </div>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Toggles">
            <div className="w-[50px] h-[20px] rounded-full bg-[#e2ddfe34] flex justify-end items-center">
              <span className="w-[30px] h-[30px] bg-[#BAA7FF] rounded-full"></span>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Tooltips">
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="w-[120px] h-[40px] flex flex-col justify-center items-center rounded-[5px] bg-[#BAA7FF] border border-[#BAA7FF] z-10 relative gap-2">
                <span className="h-[4px] w-20 bg-[#111111] rounded-full"></span>
                <span className="h-[4px] w-20 bg-[#111111] rounded-full"></span>
                <div className="w-[20px] h-[20px] rotate-45 bg-[#BAA7FF] border-b border-r  border-[#BAA7FF] -z-10 absolute left-1/2 -translate-x-1/2 -bottom-[10px]"></div>
              </div>
              <span className="w-[50px] h-[20px] border border-[#7B7B7B] rounded-full"></span>
              <FaRegHandPointer className="text-[#EEEEEE] -mt-8" />
            </div>
          </ComponentContainer>
        </div>


        <h1 className="font-semibold text-lg md:text-2xl mt-20 my-10 text-[#EEEEEE] tracking-tight">
          Feedback
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[300px] sm:w-full">
          <ComponentContainer title="Alerts">
            <div className="w-[180px] h-[70px] rounded-[10px] border border-[#BAA7FF]  flex justify-start p-5 items-start gap-3">
              <div className="w-4 h-4 bg-[#BAA7FF] rounded-full"></div>
              <div className="flex flex-col justify-start gap-2">
                <span className="w-[60px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
              </div>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Toasts">
            <div className="w-[180px] h-[90px] border-[#e2ddfe54] bg-[#e2ddfe2d] rounded-[10px] flex justify-end items-end">
              <div className="w-[70px] h-[30px] rounded-[8px] border border-[#BAA7FF] flex justify-center items-center gap-3 m-2">
                <span className="w-[6px] h-[6px] bg-[#BAA7FF] rounded-full"></span>
                <span className="h-[4px] w-[30px] bg-[#BAA7FF] rounded-full"></span>
              </div>
            </div>
          </ComponentContainer>
        </div>


        <h1 className="font-semibold text-2xl mt-20 my-10 text-[#EEEEEE]">
          Data display
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 w-[300px] sm:w-full">
          <ComponentContainer title="Cards">
            <div className="w-[150px] h-[100px] rounded-[2px] flex flex-col  bg-[#e2ddfe2d] justify-center  gap-2 relative">
              <span className="w-[130px] h-[40px] bg-[#BAA7FF] mx-auto"></span>
              <div className="flex flex-col gap-2 justify-start items-start pl-3">
                <span className="w-[70px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
              </div>
            </div>
          </ComponentContainer>
          <ComponentContainer title="Testimonials">
            <div className="w-[170px] h-[80px] rounded-[2px] flex flex-col bg-[#e2ddfe2d] justify-center items-center gap-2">
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                <span className="w-[100px] h-[4px] bg-[#7B7B7B] rounded-full"></span>
                <span className="w-[50px] h-[4px] bg-[#BAA7FF] rounded-full"></span>
            </div>
          </ComponentContainer>
        </div>
      </div>
    </div>
  );
}
