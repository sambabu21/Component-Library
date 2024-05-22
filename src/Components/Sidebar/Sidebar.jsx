import { NavLink } from "react-router-dom";
import { NavContext } from "../../App";
import { useContext } from "react";
import LinkItem from "./LinkItem";

export default function Sidebar() {
  const { navOpen, setNavOpen } = useContext(NavContext);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div>
      <div className="min-h-full w-[200px] hidden md:flex flex-col items-center pt-16">
        <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">
          GENERAL
        </h1>
        <LinkItem>avatars</LinkItem>
        <LinkItem>badges</LinkItem>
        <LinkItem>buttons</LinkItem>
        <LinkItem>loaders</LinkItem>
        <LinkItem>menu</LinkItem>
        <LinkItem>toggles</LinkItem>
        <LinkItem>tooltips</LinkItem>

        <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">
          FEEDBACK
        </h1>
        <LinkItem>alerts</LinkItem>
        <LinkItem>toasts</LinkItem>

        <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 pt-5">
          DATA DISPLAY
        </h1>

        <LinkItem>cards</LinkItem>
        <LinkItem>testimonials</LinkItem>
      </div>
      {navOpen ? (
        <div className="min-h-full w-[250px] flex md:hidden flex-col items-center pt-16 absolute left-0 top-20 bg-[#111111] border-r border-[#191919] z-30">
          <h1 className="text-[#6E56CF] font-semibold text-sm h-16 w-full flex justify-start items-center pl-3 ">
            GENERAL
          </h1>
          <LinkItem toggleNav={toggleNav}>avatars</LinkItem>
          <LinkItem toggleNav={toggleNav}>badges</LinkItem>
          <LinkItem toggleNav={toggleNav}>buttons</LinkItem>
          <LinkItem toggleNav={toggleNav}>loaders</LinkItem>
          <LinkItem toggleNav={toggleNav}>menu</LinkItem>
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
        </div>
      ) : null}
    </div>
  );
}
