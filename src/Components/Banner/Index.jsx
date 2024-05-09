import Banner from "./Banner";

export default function BannerSection() {
  return (
    <div className="py-20 flex flex-col gap-5 border-b w-full sm:w-[80%] mx-auto px-2 sm:px-0">
      <h1 className="text-3xl font-bold">Banners</h1>
      <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
      <div className="flex flex-col justify-around items-center gap-10 bg-[#5423e7] p-5 rounded-md">
        <div className=" flex flex-col justify-around items-center gap-2 sm:h-52 my-5  w-[90%]">
          <Banner title="Congratulations!" type="success">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] p-4 text-[14px] rounded-md text-white w-full">{`<Banner title="Congratulations!" type="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>>`}</h1>
        </div>
        <div className=" flex flex-col justify-around items-center gap-2 sm:h-52 my-5  w-[90%]">
          <Banner title="Attention" type="warning">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] p-4 text-[14px] rounded-md text-white w-full">{`<Banner title="Attention" type="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
        </div>
        <div className=" flex flex-col justify-around items-center gap-2 sm:h-52 my-5  w-[90%]">
          <Banner title="There is a problem with your application" type="error">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] p-4 text-[14px] rounded-md text-white w-full">{`<Banner title="There is a problem with your application" type="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
        </div>
        <div className=" flex flex-col justify-around items-center gap-2 sm:h-52 my-5  w-[90%]">
          <Banner title="Update available" type="neutral">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.
          </Banner>
          <h2 className="text-xl mt-5 font-semibold text-white">Code:</h2>
          <h1 className="bg-[#353535] text-[14px] p-4 rounded-md text-white w-full">{`<Banner title="Update available" type="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
        </div>
      </div>
      <h2 className="text-xl mt-5 font-semibold">Props:</h2>
      <div className="flex flex-col gap-3">
        <p className="text-md">Title : Title of the banner card.</p>
        <p className="text-md">
          Type : Type of the message you want ot convery. Eg:
          success,warning,error,neutral
        </p>
        <p className="text-md">
          Description : Description text passed in as child prop.
        </p>
      </div>
    </div>
  );
}
