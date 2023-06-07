import React from "react";
import { Pagination, Navigation} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faStar, faStarHalfAlt,faCartShopping
  
} from "@fortawesome/free-solid-svg-icons";




function Slider() {
    
    return(
        <>
            <div className="h-[80vh] w-[100%] pt-5 pb-5 border flex justify-around items-center flex-col bg-[#F8F3F3]">
                <div className="flex items-center text-center">
                    <h1 className="font-bold text-2xl">Sale ending in</h1>
                    <div className="flex justify-between w-[9rem] border text-white text-3xl  font-bold">
                        <button className=" bg-[#FD8000] rounded-lg p-1">02</button>
                        <button className=" bg-[#FD8000] rounded-lg p-1">02</button>
                        <button className=" bg-[#FD8000] rounded-lg p-1">02</button>
                    </div>
                </div>  
                <div className="h-[80%] w-[90%] border">
                    <Swiper
                        slidesPerView={4}
                        spaceCenter={20}
                        //grid={{
                        //    column:2,
                        //  }}
                        loop={true}
                        //pagination={{
                        //clickable: true,
                        //}}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="bg-white p-2  border ">
                            <div className="slider1 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$11.68</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%] ">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="bg-white p-2 border ">
                            <div className="slider2 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$128.99</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%]">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>



                        <SwiperSlide className="bg-white p-2 border ">
                            <div className="slider3 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$128.99</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%]">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="bg-white p-2 border">
                            <div className="slider4 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$128.99</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%]">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="bg-white p-2 border">
                            <div className="slider5 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$128.99</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%]">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className="bg-white p-2 border ">
                            <div className="slider6 w-[100%] h-[60%] shadow-black"></div>
                            <h1 className="text-black font-bold text-3xl pt-2 font-mono">$128.99</h1>
                            <h1 className="pt-1 text-[background: #787885;]">Eligible for nothing :( </h1>
                            <div className="w-[100%] flex items-center justify-between  mt-5 h-[10%]">
                                <div className="flex items-center h-[100%] w-[50%] ">
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStar} style={{  color: "#FD8000" }}/>
                                    <FontAwesomeIcon icon={faStarHalfAlt} style={{  color: "#FD8000" }}/>
                                </div>
                                    
                                <button className="border-[#FD8000] text-[#FD8000] font-bold px-4 py-1 rounded-md text-#FD8000">
                                    <FontAwesomeIcon icon={faCartShopping} style={{  color: "#FD8000" }}/>
                                    ADD
                                 </button>
                            </div>
                        </SwiperSlide>

                        
                    </Swiper>


                </div>
            </div>
        </>
    )
}
export default Slider