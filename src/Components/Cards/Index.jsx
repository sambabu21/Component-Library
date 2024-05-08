import Card from "./Card";
import uploadImg from "../../Assets/upload.png"
import tickImg from "../../Assets/tick.svg"

export default function CardSection(){
    return (
        <div className="py-20 flex flex-col gap-5 border-b">
            <h1 className="text-3xl font-bold">Cards</h1>
            <h2 className="text-xl mt-5 font-semibold">Preview:</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-5">
                <div className=" flex flex-col justify-around items-center gap-2"> 
                    <Card title="easy deployment" iconUrl={uploadImg}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-4 rounded-md">{`<Card title="easy deployment" iconUrl={uploadImg}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>`}</h1>
                </div>
                <div className=" flex flex-col justify-around items-center gap-2"> 
                    <Card title="Robust deployment" iconUrl={tickImg}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>
                    <h2 className="text-xl mt-5 font-semibold">Code:</h2>
                    <h1 className="bg-[#353535] text-[14px] p-4 rounded-md">{`<Card title="Robust deployment" iconUrl={tickImg}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card>`}</h1>
                </div>
            </div>
            <h2 className="text-xl mt-5 font-semibold">Props:</h2>
            <div className="flex flex-col gap-3">
                <p className="text-lg">Title: Sets the title text of the card. </p>
                <p className="text-lg">iconUrl: Sets the icon of the card to the image specified by the url. </p>
                <p className="text-lg">bgColor: Sets the background color for icons with transparent backgrounds. </p>
            </div>
        </div>
    )
}