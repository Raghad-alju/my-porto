import React from "react";
import color from './../images/Untitled_Artwork.png';

function Skills() {
    return (
        <div className=" w-[70rem] mx-auto">
            
            <div className=" w-full h-auto ">
                <div className="relative">
                    <img className=" w-[20rem] h-[20rem]  " src={color} />
                    <svg class="w-48 h-48 text-gray-800 left-12 top-20  absolute" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />

                    </svg>
                </div>

           
                <div className="relative w-full h-80 ">
                    <img className=" w-[20rem] h-[20rem] absolute right-0 " src={color} />
                    <svg class="w-48 h-48 text-gray-800 right-20 top-20 absolute " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 14 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 7a3 3 0 0 1 3-3M5 19h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 1 7c0 4 4 5 4 9h4Z" />
                    </svg>
                    <div className=" pl-[50%] pt-24 ">ysuayufgaiufuifsaui</div>
                </div>
            </div>
            
        </div>

    );
}

export default Skills;
