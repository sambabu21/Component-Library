export default function Loader({type}){
    if(type==="dots"){
        return(
            <div className="spinner-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }else if(type==="dotspin"){
        return(
            <div className="spinner-dotspin">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        )
    }
    return (
         <div className="spinner-dash">
         </div>
    )
}