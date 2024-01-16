import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" fixed z-[-1] bg-impBage-10 w-screen h-screen "></div>
      <Navbar />
      <About />
      <div className=" relative mt-32">
        <Projects />
      </div>
      <Skills />
      <div className=" mb-32">
      <Contact />
      </div>
      <Footer />

    </>
  );
}

export default App;
