
// text-blue-600 border-b-2 border-blue-600
import { useState, useRef } from "react";
import backends from "./Projects/backend";
import frontends from "./Projects/frontend";
import group from "./Projects/group";
import { useInView } from "react-intersection-observer"

function Projects() {

    const [ref, inView] = useInView({ threshold: 0.1 })

    const activeTab="inline-block p-4 text-gray-700 border-b-2 border-gray-500 rounded-t-lg active ";
    const [ActiveProject, setActiveProject]=useState([{tabName:'frontend',isActive:true,projects:[...frontends]},{tabName:'backend',isActive:false,projects:[...backends]},{tabName:'group',isActive:false,projects:[...group]}]);
    const [currentProjects, setCurrentProjects]=useState(frontends);

    function handleTabClick(tabName){
        console.log(frontends)
        var temp=[...ActiveProject];
        temp.forEach((obj)=>{
            if(obj.tabName === tabName){
                obj.isActive=true;
                setCurrentProjects([...obj.projects])
            }else{
                obj.isActive=false;
            }
            
        })

        setActiveProject(temp);
    }



    return (
        
        <div ref={ref} className={inView ? "fade-in-left pt-24" : "pt-24"}>
        <div   className=" lg:w-[80rem] h-auto pb-10 bg-Linen mx-auto font-lora shadow-xl ">
            <div  class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 pl-16 ">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2">
                        <button onClick={()=>handleTabClick('frontend')} className={`${ActiveProject[0].isActive? activeTab:'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'} `}>Front End Projects</button>
                    </li>
                    <li class="me-2">
                        <button onClick={()=>handleTabClick('backend')} className={`${ActiveProject[1].isActive? activeTab:'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'} `}>Backend Projects</button>
                    </li>
                    <li class="me-2">
                        <button onClick={()=>handleTabClick('group')} className={`${ActiveProject[2].isActive? activeTab:'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300'} `}>Group Projects</button>
                    </li>
                 
                </ul>
            </div>

            
            <div class="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 m-12">

            {currentProjects.map((proj,index)=>{
                       return(<div class=" relative max-w-sm bg-white border border-gray-200 shadow ">
                       <a href="#">
                           <img className="blur-md scale-90" key={index} src={proj.picture} alt="" />
                           <img  className=" absolute sm:-translate-y-48 -translate-y-32 scale-90 transition-transform hover:scale-100 " key={index} src={proj.picture} alt="" />
                       </a>
                      
                       <div class="p-5">
                           <a href="#">
                               <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{proj.projectName}</h5>
                           </a>
                           <p class="mb-3 font-normal text-gray-700 ">{proj.desc}</p>
                           <a href={proj.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                               Read more
                               <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                               </svg>
                           </a>
                       </div>
                   </div>)

            })}
               

            </div>
        </div>
        <div className=" h-[1px] w-1/4 bg-slate-700 my-36 mx-auto"></div>

        </div>
    );
}
export default Projects;
