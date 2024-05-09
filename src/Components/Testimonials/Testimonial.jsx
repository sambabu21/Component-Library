import quoteIcon from "../../Assets/quote.png"

export default function Testimonial({name,imageUrl,children,title,company}){
    return (
        <div className="w-full relative bg-[#1a1a1b] py-20 mt-20 mb-10 sm:my-10  flex flex-col justify-center items-center">
            <div className="sm:w-[60%] sm:ml-[400px] mt-16 sm:mt-0 p-5 sm:p-0">
                <img src={quoteIcon}/>
                <h1 className="text-[20px] sm:text-[24px] font-medium mt-5 text-white">{children}</h1>
                <p className="font-medium mt-5 text-white">{name}</p>
                <p className="text-white">{company},{title}</p>
            </div>
            <div className="absolute w-[300px] h-[206px] sm:w-[383px] sm:h-[464px] -top-28 sm:top-1/2 sm:-translate-y-1/2 sm:left-10 drop-shadow-xl rounded-[12px] smaller-img" style={{backgroundImage:`url(${imageUrl})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
                
            </div>
            
        </div>
    )
}