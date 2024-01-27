
import React from "react";
import flower from './../images/Screenshot_5-removebg-preview.png';
function About() {
    return (
        <div class=" flex lg:w-[70rem] gap-4 mx-auto w-[50rem]">
            
                <div class="relative mt-20 sm:w-[60rem] w-[30rem] mx-auto">
                    <svg width="100%"  className="svgText">
                        <defs>
                           
                            <style>
                                @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                            </style>

                        </defs>

                        <text className=" absolute translate-y-24" >
                            Greetings
                        </text>
                    </svg>
                    <div className=" font-lora text-2xl text-justify"> I'm <span className=" text-red-700">Raghad Aljuhaymi</span> a Fresh Graduate holding a Computer Science bachelor degree. Passionate about web development</div>
                </div>
            
            <div>
                <img class="h-auto max-w-full rounded-lg" src={flower} alt="" />
            </div>



        </div>
    );
}

export default About;
