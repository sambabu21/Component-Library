import { useEffect } from "react";
import ComponentContainer from "./ComponentContainer";

export default function Components() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    
      <div className="min-h-screen w-[90vw] md:w-[70vw] flex flex-col justify-center items-center py-20">
        <h1 className="text-2xl sm:text-5xl font-bold tracking-tighter text-[#EEEEEE]">
          Component Library
        </h1>
        <p className="md:text-lg w-[60%] mt-10 text-[#B4B4B4] tracking-tighter">
          Explore the whole collection of responsive, accessible components
          built with React and HTML ready to be used on your website or app.
        </p>
        <div className="flex flex-col justify-center items-start my-20">
          <h1 className="font-semibold text-lg md:text-2xl mb-10 text-[#EEEEEE] tracking-tight">
            General
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <ComponentContainer title="Avatar">
              <div className="w-[60px] h-[60px] border-2 border-[#6E56CF] rounded-full flex justify-center items-center">
                <h1 className="text-[#6E56CF]">SB</h1>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Badges">
              <div className="w-[100px] h-[40px]  flex justify-center items-center border rounded-[10px] border-[#6E56CF]">
                <div className="w-[60px] h-[10px] bg-[#6E56CF]"></div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Alerts">
              <div className="w-[200px] h-[80px] rounded-[10px] border border-[#6E56CF]  flex justify-start p-5 items-start gap-3">
                <div className="w-4 h-4 bg-[#6E56CF] rounded-full"></div>
                <div className="flex flex-col justify-start gap-2">
                  <span className="w-[70px] h-[10px] bg-[#6E56CF]"></span>
                  <span className="w-[120px] h-[4px] bg-[#7B7B7B]"></span>
                  <span className="w-[120px] h-[4px] bg-[#7B7B7B]"></span>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Buttons">
              <div className=" px-[40px] py-[15px] flex justify-center items-center border rounded-[5px] border-[#6E56CF]">
                <div className="w-[60px] h-[10px] bg-[#6E56CF]"></div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Dropdown">
              <div className="flex flex-col gap-2">
                <div className="w-[80px] h-[20px] rounded-[3px] border border-[#7B7B7B] flex justify-center items-center">
                  <span className="w-[50px] h-[3px] bg-[#7B7B7B]"></span>
                </div>
                <div className="w-[200px] h-[72px] rounded-[3px] border border-[#6200EE] ">
                  <div className="h-1/3 border-b border-[#6E56CF] rounded-t-[3px] bg-[#291F43] flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#6E56CF]"></span>
                  </div>
                  <div className="h-1/3 border-b border-[#6E56CF] flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#7B7B7B]"></span>
                  </div>
                  <div className="h-1/3 flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#7B7B7B]"></span>
                  </div>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Toasts">
              <div className="w-[150px] h-[50px] rounded-[10px] border border-[#6E56CF] flex justify-center items-center gap-3">
                <span className="w-4 h-4 bg-[#6E56CF] rounded-full"></span>
                <span className="h-2 w-20 bg-[#6E56CF]"></span>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Tooltip">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="w-[150px] h-[50px] flex justify-center items-center rounded-[5px] border border-[#6E56CF] z-10 relative">
                  <span className="h-2 w-20 bg-[#6E56CF]"></span>
                  <div className="w-[20px] h-[20px] rotate-45 border-b border-r bg-[#191919] border-[#6E56CF] -z-10 absolute left-1/2 -translate-x-1/2 -bottom-[10px]"></div>
                </div>
                <span className="w-4 h-4 bg-[#7B7B7B] rounded-full"></span>
              </div>
            </ComponentContainer>
          </div>
          <h1 className="font-semibold text-2xl mt-20 my-10 text-[#EEEEEE]">
            Custom Components
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            <ComponentContainer title="Cards">
              <div className="w-[180px] h-[90px] rounded-[10px] flex border border-[#6E56CF] justify-center items-center gap-10 relative">
                <span className="w-[30px] h-[30px] bg-[#6E56CF] rounded-md absolute -top-4"></span>
                <div className="flex flex-col gap-2">
                  <span className="w-[70px] h-[5px] bg-[#6E56CF]"></span>
                  <span className="w-[100px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[100px] h-[5px] bg-[#7B7B7B]"></span>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Testimonials">
              <div className="w-[180px] h-[90px] rounded-[0px] flex border border-[#6E56CF] justify-center items-center gap-5">
                <span className="w-[50px] h-[60px] bg-[#6E56CF] rounded-md"></span>
                <div className=" h-[80%] flex flex-col gap-2 mt-5">
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[30px] h-[5px] bg-[#6E56CF]"></span>``
                </div>
              </div>
            </ComponentContainer>
          </div>
        </div>
      </div>

  );
}
