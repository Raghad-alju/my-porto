
import React from "react";
import { useInView } from "react-intersection-observer"

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <div ref={ref} className={inView ? "fade-in-left pt-24" : "pt-24"}>
    <div className=" lg:w-[80rem] mx-auto">
    <div className=" font-lora ">Contact</div>
   <div className=" w-full h-36 bg-Linen">

   </div>
    
    </div>
    </div>
  );
}

export default Contact;
