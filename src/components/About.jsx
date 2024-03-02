
import React from "react";
import flower from './../images/Screenshot_5-removebg-preview.png';
import { useInView } from "react-intersection-observer"

function About() {
    const [ref, inView] = useInView({ threshold: 0.1 })

    return (
        <div ref={ref} className={inView ? "fade-in-left pt-24" : "pt-24"}>
        <div class=" flex max-sm:flex-wrap lg:w-[70rem] gap-4 mx-auto md:w-[50rem] ">
            
                <div class="relative mt-20 sm:w-[60rem] w-[25rem] m-8 md:h-[35rem]">
                    <svg width="100%"  className="svgText">
                        <defs>
                           
                            <style>
                                @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                            </style>

                        </defs>

                        <text className=" absolute translate-y-24 max-sm:text-5xl" >
                            Greetings
                        </text>
                    </svg>
                    <div className=" font-lora text-2xl text-justify"> I'm <span className=" text-red-700">Raghad Aljuhaymi</span> a Fresh Graduate holding a Computer Science bachelor degree. Passionate about web development</div>
                </div>
            
            <div>
                <img class="h-auto max-w-full rounded-lg" src={flower} alt="" />
            </div>



        </div>
        <div className=" h-[1px] w-1/4 bg-slate-700 mb-36 mx-auto"></div>
        </div>
    );
}

export default About;
