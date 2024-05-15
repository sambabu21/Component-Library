import Testimonial from "./Testimonial";
import profileImg from "../../Assets/avatar_pic.jpeg";
import { useEffect } from "react";
import PreviewCode from "../../PreviewCode/Index";

export default function TestimonialsSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div className="min-h-screen max-w-3xl flex flex-col items-start p-20 gap-10">
        <h1 className="font-semibold text-2xl text-[#EEEEEE] tracking-tight selection:">
          Testimonials
        </h1>
        <h2 className="text-[#B4B4B4] -mt-5">
          A testimonial is an honest endorsement of your product or service that
          usually comes from a customer, colleague, or peer who has benefited
          from or experienced success as a result of the work you did for them.
        </h2>
        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Basic testimonial
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.
              </Testimonial>
            </div>
          }
          code={`
    <div>  
      <Testimonial
        name="May Andersons"
        title="CTO"
        company="Workcation"
      >
        Defix UI is one of the best libraries I've came across. Good
        looking, easy to use and above all super accessible.
        </Testimonial>
    </div>`}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Testimonial with image
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                imageUrl={profileImg}
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.
              </Testimonial>
            </div>
          }
          code={`
    <div>  
      <Testimonial
        imageUrl={profileImg}
        name="May Andersons"
        title="CTO"
        company="Workcation"
      >
        Defix UI is one of the best libraries I've came across. Good
        looking, easy to use and above all super accessible.{" "}
      </Testimonial>
    </div>`}
        />

        <h3 className="font-semibold text-xl text-[#EEEEEE] tracking-tight">
          Testimonial in light mode
        </h3>
        <PreviewCode
          component={
            <div className="flex justify-center items-center gap-20">
              <Testimonial
                lightMode
                imageUrl={profileImg}
                name="May Andersons"
                title="CTO"
                company="Workcation"
              >
                Defix UI is one of the best libraries I've came across. Good
                looking, easy to use and above all super accessible.{" "}
              </Testimonial>
            </div>
          }
          code={`
    <div>  
      <Testimonial
        lightMode
        imageUrl={profileImg}
        name="May Andersons"
        title="CTO"
        company="Workcation"
      >
        Defix UI is one of the best libraries I've came across. Good
        looking, easy to use and above all super accessible.{" "}
      </Testimonial>
    </div>`}
        />
      </div>
    </div>
  );
}

{
  /* <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0">
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
    </div>   */
}
