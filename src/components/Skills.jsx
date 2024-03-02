import React, { useState } from "react";
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
    const [isHovered, setIsHovered] = useState([]);
    const languagesIcon=[{name:'Java',icon:java},{name:'Python',icon:python},{name:'CSS',icon:css},{name:'JavaScript',icon:javaScript},{name:'HTML',icon:html},{name:'.Net',icon:dotnet},{name:'TailwindCSS',icon:tailwind},{name:'React',icon:react}];
    function handleHover(index) {
        let temp = [...isHovered];
        temp[index] = true;
        setIsHovered(temp
        );
        // temp=hoverRef.current.className;
        // hoverRef.current.className= temp + " w-10 transition-all duration-100 ease-out "
      }
      function handleLeave(index) {
        let temp = [...isHovered];
        temp[index] = false;
        setIsHovered(temp
        );
        //hoverRef.current.className=temp;
      }
    return (
        <div ref={ref} className={inView ? "fade-in-left pt-24" : null}>
        <div className=" lg:w-[70rem]  mx-auto">
            
            <div className=" w-full h-auto  ">
                <div className="relative md:flex max-md:h-[50rem] ">
                    <img className=" w-[20rem] h-[20rem]   " src={color} />
                    
                    <div class="w-48 h-48 text-gray-600 left-12 top-20  absolute" >
                        <img src={skills} />
                    </div>
                    <div className=" lg:w-1/2 h-44 lg:m-24 ml-0 flex justify-center flex-wrap ">


                    {languagesIcon.map((lang ,index)=>{
                        return <div key={index} onMouseOver={()=>handleHover(index)} onMouseLeave={()=>handleLeave(index)} className=" w-20 h-20 bg-impBage-300 rounded-full p-2  m-4 relative transition-transform hover:scale-95 hover:bg-impBage-50">
                        <div className={`${isHovered[index]? 'absolute -translate-y-10 text-md w-16 font-lora text-center':'hidden'}`}>{lang.name}</div>
                        <img src={lang.icon}/>
                        
                        </div>
                    })}
                        
                        
                       {/* <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={python}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img className=" p-[6px]" src={css}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={javaScript}/></div>

                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2 "><img className=" p-[6px]" src={html}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={dotnet}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={tailwind}/></div>
                        <div className=" w-20 h-20 bg-impBage-300 rounded-full p-2 mr-2"><img src={react}/></div>*/}



                    </div>
                </div>

           
                <div className="relative w-full h-80 max-md:h-[40rem] ">
                    <img className=" w-[20rem] h-[20rem] absolute right-0  " src={color} />
                    
                    <div class="w-48 h-48 text-gray-800 right-20 top-20 absolute" >
                        <img src={creative} />
                    </div>
                    

                    <div className=" md:absolute top-[5rem] right-[20rem] lg:w-1/2  h-44 ">
                        <div className=" flex justify-center flex-wrap font-lora text-white max-md:translate-y-72 ">
                            
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Creative</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">UX/UI design</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Graphic design</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Machine learning</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Web Development</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Research skills</span>
                            <span className="  bg-impBage-300 text-2xl m-3 p-2 rounded-lg transition-transform hover:scale-105 hover:bg-impBage-50">Maths</span>


                            </div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>

    );
}

export default Skills;
