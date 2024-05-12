import { useEffect } from "react";
import neutralPng from "../Assets/neutral.png";
import Badge from "../Components/Badges/Badge";
import Banner from "../Components/Banner/Banner";
import Button from "../Components/Button/Button";
import ComponentContainer from "./ComponentContainer";

export default function Components() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  return (
    <div className="bg-[#111927]">
      <div className="min-h-screen w-full sm:w-[80vw] mx-auto flex flex-col justify-center items-center py-20 ">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#EEEEEE]">
          Component Library
        </h1>
        <p className="text-xl w-[60%] mt-10 text-[#B4B4B4] tracking-tighter">
          Explore the whole collection of responsive, accessible components
          built with React and HTML ready to be used on your website or app.
        </p>
        <div className="flex flex-col justify-center items-start my-20">
          <h1 className="font-semibold text-2xl mb-10 text-[#EEEEEE] tracking-tight">
            General
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <ComponentContainer title="Avatar">
    
                <div className="w-[60px] h-[60px] border border-[#FFFF57] rounded-full flex justify-center items-center">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#FFFF57]"></div>
                </div>
          
            </ComponentContainer>
            <ComponentContainer title="Badges">
              <div className="w-[100px] h-[40px]  flex justify-center items-center border rounded-[10px] border-[#FFFF57]">
                <div className="w-[60px] h-[10px] bg-[#FFFF57]"></div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Banners">
              <div className="w-[200px] h-[80px] rounded-[10px] border border-[#FFFF57]  flex justify-start p-5 items-start gap-3">
                <div className="w-4 h-4 bg-[#FFFF57] rounded-full"></div>
                <div className="flex flex-col justify-start gap-2">
                  <span className="w-[70px] h-[10px] bg-[#FFFF57]"></span>
                  <span className="w-[120px] h-[4px] bg-[#7B7B7B]"></span>
                  <span className="w-[120px] h-[4px] bg-[#7B7B7B]"></span>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Buttons">
              <div className=" px-[40px] py-[15px] hover:bg-[#2D2305] flex justify-center items-center border rounded-[5px] border-[#FFFF57]">
                <div className="w-[60px] h-[10px] bg-[#FFFF57]"></div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Dropdown">
              <div className="flex flex-col gap-2">
                <div className="w-[80px] h-[30px] rounded-[3px] border border-[#7B7B7B] flex justify-center items-center">
                  <span className="w-[50px] h-[3px] bg-[#7B7B7B]"></span>
                </div>
                <div className="w-[200px] h-[90px] rounded-[3px] border border-[#FFFF57] ">
                  <div className="h-1/3 border-b border-[#FFFF57] rounded-t-[3px] bg-[#2D2305] flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#FFFF57]"></span>
                  </div>
                  <div className="h-1/3 border-b border-[#FFFF57] flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#7B7B7B]"></span>
                  </div>
                  <div className="h-1/3 flex justify-center items-center">
                    <span className="w-[100px] h-[3px] bg-[#7B7B7B]"></span>
                  </div>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Toasts">
              <div className="w-[150px] h-[50px] rounded-[10px] border border-[#FFFF57] flex justify-center items-center gap-3">
                <span className="w-4 h-4 bg-[#FFFF57] rounded-full"></span>
                <span className="h-2 w-20 bg-[#FFFF57]"></span>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Tooltip">
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="w-[150px] h-[50px] flex justify-center items-center rounded-[5px] border border-[#FFFF57] z-10 relative">
                  <span className="h-2 w-20 bg-[#FFFF57]"></span>
                  <div className="w-[20px] h-[20px] rotate-45 border-b border-r bg-[#0D1520] border-[#FFFF57] -z-10 absolute left-1/2 -translate-x-1/2 -bottom-[10px]"></div>
                </div>
                <span className="w-4 h-4 bg-[#7B7B7B] rounded-full"></span>
              </div>
            </ComponentContainer>
          </div>
          <h1 className="font-semibold text-2xl mt-20 my-10 text-[#EEEEEE]">
            Custom Components
          </h1>
          <div className="grid sm:grid-cols-3 gap-10">
            <ComponentContainer title="Cards">
              <div className="w-[200px] h-[100px] rounded-[10px] flex border border-[#FFFF57] justify-center items-center gap-10 relative">
                <span className="w-[30px] h-[30px] bg-[#FFFF57] rounded-md absolute -top-4"></span>
                <div className="flex flex-col gap-2">
                  <span className="w-[70px] h-[5px] bg-[#FFFF57]"></span>
                  <span className="w-[100px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[100px] h-[5px] bg-[#7B7B7B]"></span>
                </div>
              </div>
            </ComponentContainer>
            <ComponentContainer title="Testimonials">
              <div className="w-[200px] h-[100px] rounded-[0px] flex border border-[#FFFF57] justify-center items-center gap-5">
                <span className="w-[50px] h-[60px] bg-[#FFFF57] rounded-md"></span>
                <div className=" h-[80%] flex flex-col gap-2 mt-5">
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[80px] h-[5px] bg-[#7B7B7B]"></span>
                  <span className="w-[30px] h-[5px] bg-[#FFFF57]"></span>``
                </div>
              </div>
            </ComponentContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
