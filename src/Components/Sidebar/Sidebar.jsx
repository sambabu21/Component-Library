import { NavContext } from "../../App";
import { useContext } from "react";
import LinkItem from "./LinkItem";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const { navOpen, setNavOpen } = useContext(NavContext);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <div className=" fixed inset-y-0 left-0 md:sticky md:top-16  my-20 md:z-30 md:block md:h-[90vh] md:shrink-0 md:text-sm md:leading-6 md:backdrop-blur-none h-[756px] w-[200px] hidden  overflow-auto sidebar">
        <h1 className="text-[#6E56CF] font-semibold text-sm py-[14px] w-full flex justify-start items-center pl-3 ">
          GENERAL
        </h1>
        <LinkItem>avatars</LinkItem>
        <LinkItem>badges</LinkItem>
        <LinkItem>buttons</LinkItem>
        <LinkItem>loaders</LinkItem>
        <LinkItem>menu</LinkItem>
        <LinkItem>modals</LinkItem>
        <LinkItem>toggles</LinkItem>
        <LinkItem>tooltips</LinkItem>

        <h1 className="text-[#6E56CF] font-semibold text-sm py-[14px] w-full flex justify-start items-center pl-3 pt-5">
          FEEDBACK
        </h1>
        <LinkItem>alerts</LinkItem>
        <LinkItem>toasts</LinkItem>

        <h1 className="text-[#6E56CF] font-semibold text-sm py-[14px] w-full flex justify-start items-center pl-3 pt-5">
          DATA DISPLAY
        </h1>

        <LinkItem>cards</LinkItem>
        <LinkItem>testimonials</LinkItem>
      </div>
      {navOpen ? (
        <AnimatePresence>
          <div className="">
            <div className="w-screen h-full absolute top-0 bg-[#111111a9] z-30"></div>
            <motion.div
              initial={{ opacity: 0, x: -250 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, x: -250 }}
              className="min-h-full w-[250px] flex md:hidden flex-col items-start pt-5 absolute inset-y-0 left-0 bg-[#111111] border-r border-[#191919] z-30 overflow-scroll pl-1"
            >
              {/* <div className="flex justify-center items-center gap-2">
            <IoClose className="text-[#6E56CF] w-7 h-7 " onClick={toggleNav}/>
            <h1 className="text-white font-bold text-[18px]">DUI</h1>
            </div> */}

              <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">
                GENERAL
              </h1>
              <LinkItem toggleNav={toggleNav}>avatars</LinkItem>
              <LinkItem toggleNav={toggleNav}>badges</LinkItem>
              <LinkItem toggleNav={toggleNav}>buttons</LinkItem>
              <LinkItem toggleNav={toggleNav}>loaders</LinkItem>
              <LinkItem toggleNav={toggleNav}>menu</LinkItem>
              <LinkItem toggleNav={toggleNav}>modals</LinkItem>
              <LinkItem toggleNav={toggleNav}>toggles</LinkItem>
              <LinkItem toggleNav={toggleNav}>tooltips</LinkItem>

              <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">
                FEEDBACK
              </h1>

              <LinkItem toggleNav={toggleNav}>alerts</LinkItem>
              <LinkItem toggleNav={toggleNav}>toasts</LinkItem>

              <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">
                DATA DISPLAY
              </h1>

              <LinkItem toggleNav={toggleNav}>cards</LinkItem>
              <LinkItem toggleNav={toggleNav}>testimonials</LinkItem>
            </motion.div>
          </div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
