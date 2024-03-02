
import React from "react";
import { useInView } from "react-intersection-observer"

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <div ref={ref} className={inView ? "fade-in-left pt-24" : "pt-24"}>
    <div className=" lg:w-[80rem] mx-auto font-lora">
    
   <div className=" w-full ">
    <div className="h-36 bg-Linen m-4">
    <div className=" flex bg-impBage-300 h-10 w-3/4 m-auto translate-y-10 rounded-md">
    <svg class="w-6 h-6 text-gray-100 mx-4 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M2 5.6V18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V5.6l-.9.7-7.9 6a2 2 0 0 1-2.4 0l-8-6-.8-.7Z"/>
    <path d="M20.7 4.1A2 2 0 0 0 20 4H4a2 2 0 0 0-.6.1l.7.6 7.9 6 7.9-6 .8-.6Z"/>
  </svg>
    <div className=" mt-2 text-zinc-50">raghad.alju@outlook.com</div>
  
  

    </div>

    </div>
   </div>
    
    </div>
    </div>
  );
}

export default Contact;
