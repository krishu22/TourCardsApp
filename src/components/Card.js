import { useState } from "react";

function Card({id, image, info, price, name, removeTour}){

        const [readMore, setReadMore] = useState(false);
        const description = readMore ? info : `${info.substring(0,200)}....`;  

        function readMoreHandler(){ 
                setReadMore(!readMore);
        }

        return (
                <div className="w-[400px] max-h-full m-[1rem] p-[1rem] flex flex-col rounded-[10px] items-center parent">

                        <img className="w-[380px] object-cover aspect-square" src={image}></img>

                        <div className="my-[20px] mx-[5px]">
                                <h4 className="text-[#1faa59] text-[1.3rem] text-center">{price}</h4>
                                <h4 className="text-[1.5rem] text-center font-[600]">{name}</h4>
                        </div>    

                        <div>
                                {description}
                                <span className="text-[#12b0e8] cursor-pointer" onClick={readMoreHandler}>
                                        {readMore ? 'Show less' : 'Read more'}
                                </span>
                        </div>

                        <button className="mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-[#b4161b] cursor-pointer rounded-[10px] text-[18px] font-bold bg-[#b4161b21] hover:bg-[red] hover:text-white hover:transition-all hover:transition-duration-[0.2s]" onClick={() => removeTour(id)}>Not Interested</button>

                </div>
        );

}

export default Card;