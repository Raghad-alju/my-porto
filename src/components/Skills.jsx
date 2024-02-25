import React from "react";
import color from './../images/Untitled_Artwork.png';
import { useInView } from "react-intersection-observer"
import java from '../images/icons/java-svgrepo-com.png'
import python from '../images/icons/python-127-svgrepo-com.png'
import css from '../images/icons/css3-svgrepo-com.png'
import html from '../images/icons/html5-svgrepo-com.png'
import dotnet from '../images/icons/dotnet-svgrepo-com.png'
import javaScript from '../images/icons/nodejs-svgrepo-com.png'
import tailwind from '../images/icons/tailwind-svgrepo-com.png'
import react from '../images/icons/react-svgrepo-com.png'
import skills from '../images/icons/skills-svgrepo-com.png'
import creative from '../images/icons/creative-process-svgrepo-com.png'

//import database from '../images/icons/my-porto/database-svgrepo-com(1).png'



function Skills() {
    const [ref, inView] = useInView({ threshold: 0.1 })

    return (
        <div ref={ref} className={inView ? "fade-in-left pt-24" : null}>
        <div className=" lg:w-[70rem]  mx-auto">
            
            <div className=" w-full h-auto ">
                <div className="relative flex">
                    <img className=" w-[20rem] h-[20rem]  " src={color} />
                    
                    <div class="w-48 h-48 text-gray-600 left-12 top-20  absolute" >
                        <img src={skills} />
                    </div>
                    <div className=" w-1/2 h-44 m-24 ml-0 flex justify-center flex-wrap">
                               
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={java}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={python}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img className=" p-[6px]" src={css}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={javaScript}/></div>

                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2 "><img className=" p-[6px]" src={html}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={dotnet}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={tailwind}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={react}/></div>



                    </div>
                </div>

           
                <div className="relative w-full h-80 ">
                    <img className=" w-[20rem] h-[20rem] absolute right-0 " src={color} />
                    
                    <div class="w-48 h-48 text-gray-800 right-20 top-20 absolute" >
                        <img src={creative} />
                    </div>
                    

                    <div className=" absolute top-[5rem] right-[20rem] w-1/2  h-44 ">
                        <div className=" flex justify-center flex-wrap ">
                            
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Creative</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">UX/UI design</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Graphic design</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Machine learning</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Web Development</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Research skills</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Maths</span>
                            <span className="  bg-purple-400 text-2xl m-3 p-2 rounded-lg">Research skills</span>


                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>

    );
}

export default Skills;
