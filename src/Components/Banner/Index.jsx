import Banner from "./Banner";

export default function BannerSection(){
    return (
        <div className="py-20 flex flex-col gap-5 border-b">
            <h1 className="text-3xl font-bold">Banners</h1>
            <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
            <div className="flex flex-col justify-around items-center gap-2">
                <div className=" flex flex-col justify-around items-center gap-2 h-52 my-5"> 
                    <Banner title="Congratulations!" type="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] p-2 rounded-md">{`<Banner title="Congratulations!" type="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>>`}</h1>
                </div>
                <div className=" flex flex-col justify-around items-center gap-2 h-52 my-5"> 
                    <Banner title="Attention" type="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] p-2 rounded-md">{`<Banner title="Attention" type="warning">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
                </div>
                <div className=" flex flex-col justify-around items-center gap-2 h-52 my-5"> 
                    <Banner title="There is a problem with your application" type="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] p-2 rounded-md">{`<Banner title="There is a problem with your application" type="error">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
                </div>
                <div className=" flex flex-col justify-around items-center gap-2 h-52 my-5"> 
                    <Banner title="Update available" type="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] p-2 rounded-md">{`<Banner title="Update available" type="neutral">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>`}</h1>
                </div>
            </div>
            <h2 className="text-xl mt-5 font-semibold">Props:</h2>
            <div className="flex flex-col gap-3">
                <p className="text-lg">Title : Title of the banner card.</p>
                <p className="text-lg">Type : Type of the message you want ot convery. Eg: success,warning,error,neutral</p>
                <p className="text-lg">Description : Description text passed in as child prop.</p>
            </div>
        </div>
    )
}