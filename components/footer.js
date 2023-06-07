//import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheckCircle,faGlobe,faLock} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return(
        <>
            <div className="bg-[#413FA7] flex flex-col justify-around items-center pt-7 pb-6 h-[100%] w-[100%]">
                <div className="w-[100%] md:w-[90%] flex items-center justify-evenly  flex-wrap ">
                    <div className="h-[10vh] w-[62%] md:w-[32%] flex justify-center items-center ">
                        <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{  color: "White" , fontSize: "41px" }}
                        />
                        <h1 className="ml-3 font-bold text-white">    <span className="font-semibold"> 100% </span> Original Products    </h1>
                    </div>
                    <div className="h-[10vh] w-[62%]  md:w-[32%] flex justify-center items-center ">
                        <FontAwesomeIcon
                                icon={faGlobe}
                                style={{  color: "White" , fontSize: "41px" }}
                        />
                        <h1 className="ml-3 font-bold text-white">  Easy Replacement   </h1>
                    </div>
                    <div className="h-[10vh] w-[62%]  md:w-[32%] flex justify-center items-center ">
                        <FontAwesomeIcon
                                icon={faLock}
                                style={{  color: "White" , fontSize: "41px" }}
                        />
                        <h1 className="ml-3 font-bold text-white">     Safe & Secure <span className="font-semibold"> online Shopping  </span>     </h1>
                    </div>
                </div>
                <div className="h-[2px] w-[90%] bg-white mt-5"></div>


                <div className=" mt-14  w-[100%] md:w-[90%] flex items-center justify-evenly  flex-wrap">

                    <div className="md:h-[70vh] w-[40%] md:w-[18%] text-white mt-3">
                        <h1 className="font-bold text-xl ">Who we Are</h1>
                        <h1 className=" text-lg mt-3">About</h1>
                        <h1 className=" text-lg">Team</h1>
                        <h1 className=" text-lg">Work With Us</h1>
                    </div>
                      

                    <div className="md:h-[70vh] w-[40%] md:w-[18%] text-white mt-3">
                        <h1 className="font-bold text-xl ">Eommerce </h1>
                        <h1 className=" text-lg mt-3">Features</h1>
                        <h1 className=" text-lg">Payments</h1>
                        <h1 className=" text-lg">Marketing</h1>
                        <h1 className=" text-lg">Shipping</h1>
                        <h1 className=" text-lg">Extension Store</h1>
                        <h1 className=" text-lg">eCommerce blog</h1>
                        <h1 className=" text-lg">Development blog</h1>
                        <h1 className=" text-lg">Ideas board</h1>
                        <h1 className=" text-lg">Mobile App</h1>
                        <h1 className=" text-lg">Community</h1>
                        <h1 className=" text-lg">Style Guide</h1>
                        <h1 className=" text-lg">Email Newsletter</h1>
                    </div>
                                  



                    <div className="md:h-[70vh] w-[40%] md:w-[18%] text-white mt-3">
                        <h1 className="font-bold text-xl ">Other products</h1>
                        <h1 className=" text-lg">Payments</h1>
                        <h1 className=" text-lg">Marketing</h1>
                        <h1 className=" text-lg">Shipping</h1>
                    </div>



                    <div className="md:h-[70vh] w-[40%] md:w-[18%] text-white mt-3">
                        <h1 className="font-bold text-xl ">Support</h1>
                        <h1 className=" text-lg">Payments</h1>
                        <h1 className=" text-lg">Marketing</h1>
                        <h1 className=" text-lg">Shipping</h1>
                        <h1 className=" text-lg">Extension Store</h1>
                        <h1 className=" text-lg">eCommerce blog</h1>
                        <h1 className=" text-lg">Who we Are</h1>
                    </div>



                    <div className="md:h-[70vh] w-[40%] md:w-[18%] text-white mt-3">
                        <h1 className="font-bold text-xl ">We recommend</h1>
                        <h1 className=" text-lg">Ideas board</h1>
                        <h1 className=" text-lg">Mobile App</h1>
                        <h1 className=" text-lg">Community</h1>
                        <h1 className=" text-lg">Email Newsletter</h1>
                    </div>


                    

                    


                </div>




            </div>
        </>
    )
}
export default Footer 