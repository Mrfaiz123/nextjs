import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMusic,
  faBolt,
  faCartShopping,
  faFilm,
  faGlobe
  
} from "@fortawesome/free-solid-svg-icons";

function PreNav() {
    return(
        <>
        <div className=" font-semibold bg-white flex align-center justify-center p-5">
            <ul className="sm:text-sm md:text-xl w-full md:w-[80%] flex flex-wrap align-center justify-around text-[#4F4F4F]">

                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faGlobe}
                        style={{  color: "blue" }}
                    />
                    All Categories</li>

                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faFilm}
                        style={{  color: "blue" }}
                    />
                    Entertainment
                </li>
                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faMusic}
                        style={{  color: "blue" }}
                    />
                    Music
                </li>
                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faMusic}
                        style={{  color: "blue" }}
                    />
                    Pets
                </li>
                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faBolt}
                        style={{  color: "blue" }}
                    />
                    Electrical Tool</li>
                <li className="flex flex-col">
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        style={{  color: "blue" }}
                    />
                Mother Care</li>
                

            </ul>
        </div>
        </>
    )
}
export default PreNav