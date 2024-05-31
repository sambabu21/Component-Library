import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-40 w-full h-[calc(100vh-128px)] flex flex-col justify-center items-center bg-[#191919]" aria-label="Defix UI home page relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      <div className="w-full md:w-[968px] flex flex-col justify-center items-start gap-10 sm:gap-20 md:pr-28 p-10 md:p-0">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.75 } }}
          className=" text-4xl sm:text-6xl font-bold text-[#EEEEEE] sm:w-[80%]  sm:text-left tracking-tight gradient-text"
        >
          Streamline your tailwind CSS projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.75, delay: 0.2 },
          }}
          className="text-[#B4B4B4] font-semibold text-lg sm:text-xl tracking-tight"
        >
          Simple, elegant, responsive and reusable React components crafted to
          increase your efficiency and improve your experience as a developer.
        </motion.p>
        <motion.div
        initial={{y:50,opacity:0}}
        animate={{y:0,opacity:1,transition:{duration:0.75,delay:0.4}}}
        >
          <Link
            to="/components"
            className="w-[200px] sm:w-[250px] h-[50px] flex justify-center items-center text-white font-semibold hover:shadow-[0px_0px_10px_7px_#291F43] text-[14px] sm:text-[16px] border border-[#6E56CF] rounded-full"
            aria-label="Navigate to the components page"
          >
            Explore components →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
