import React from "react";
import img1 from "../images/18899295 1.png";
import Image from "next/image";
//import img1 from "../public/images/18899295 1.png";


function Hero() {
    return(
        <>
        <div className="hero bg-black h-[60vh] w-[95%] mx-[auto]">
            
        </div>
        <div className="h-[100%] w-[100%] text-center mt-5 pb-5">
            <h1 className="font-serif font-bold text-4xl">Top Categories</h1>
            <div className=" flex flex-wrap justify-around h-[100%] pt-5 w-[100%]">
                
                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero1 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Groceries</h1>
                </div>


                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero2 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Fragrances</h1>
                </div>


                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero3 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Home & <br/> Appliances </h1>
                </div>


                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero4 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Electronics</h1>
                </div>


                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero5 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Women’s <br/> Fashion</h1>
                </div>


                <div className="h-[100%] w-[13rem] flex flex-col justify-between pt-3 ">
                    <div className="hero6 h-[30vh] w-[100%]"></div>
                    <h1 className="font-bold text-2xl pt-2">Men’s <br/> Fashion</h1>
                </div>
                

                
            </div>
        </div>
        </>
    )
}
export default Hero