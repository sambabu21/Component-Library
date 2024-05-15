import Testimonial from "./Testimonial";
import profileImg from "../../Assets/profile.jpg"
import { useEffect } from "react";

export default function TestimonialsSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
        <div className="flex flex-col justify-around items-center gap-2 bg-[#5423e7] p-5 rounded-md">
          <div className=" flex flex-col justify-around items-center gap-2 my-5">
            <Testimonial imageUrl={profileImg} name="May Andersons" title="CTO" company="Workcation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>
            <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
            <h1 className="bg-[#353535] p-4 text-[14px] rounded-md text-white">{`<Testimonial imageUrl={profileImg} name="May Andersons" title="CTO" company="Workcation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>`}</h1>
          </div>
        </div>
        <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-3">
        <p className="text-md">
          Name: Name of the person giving the testimonial.{" "}
        </p>
        <p className="text-md">
          Title: Title of the person in their company.{" "}
        </p>
        <p className="text-md">
          Company: Name of their company.{" "}
        </p>
        <p className="text-md">
          ImageUrl: url of their image.{" "}
        </p>
      </div>
      </div>  
)
};