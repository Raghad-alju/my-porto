
import React from "react";
import butterfly from './../images/Screenshot_4.png';
function About() {
    return (
        <div class=" flex w-[90rem] gap-4 mx-auto mt-10 ">
            
                <div class="relative mt-20 w-[60rem] mx-auto">
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
                    <div className=" font-lora text-2xl text-justify"> I'm <span className=" text-red-700">Ragahd Aljuhayimi</span> a Fresh Graduate holding a Computer Science bachelor degree. Passionate about web development</div>
                </div>
            
            <div>
                <img class="h-auto max-w-full rounded-lg" src={butterfly} alt="" />
            </div>



        </div>
    );
}

export default About;
