import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <div className=" fixed z-[-1] bg-impBage-10 w-screen h-screen "></div>
    <Navbar />
    <About />
    <div className=" relative mt-32">
    <Projects />
    </div>
    
    </>
  );
}

export default App;
