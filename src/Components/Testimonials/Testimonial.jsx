import quoteIcon from "../../Assets/quote.png"

export default function Testimonial({name,imageUrl,children,title,company}){
    return (
        <div className="w-full relative bg-[#2545B8] py-20 mt-20 mb-10 sm:my-10  flex flex-col justify-center items-center">
            <div className="sm:w-[60%] sm:ml-[400px] mt-16 sm:mt-0 p-5 sm:p-0">
                <img src={quoteIcon}/>
                <h1 className="text-[24px] font-medium mt-5">{children}</h1>
                <p className="font-medium mt-5">{name}</p>
                <p>{company},{title}</p>
            </div>
            <div className="absolute w-[344px] h-[206px] sm:w-[383px] sm:h-[464px] -top-28 sm:top-1/2 sm:-translate-y-1/2 sm:left-10 rounded-[12px] smaller-img" style={{backgroundImage:`url(${imageUrl})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                {/* <img src={imageUrl} className=" w-[383px] h-[464px] rounded-[12px]"/> */}
            </div>
            
        </div>
    )
}