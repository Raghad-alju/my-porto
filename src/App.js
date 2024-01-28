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
      <div className=" pt-24">
        <section id='About'>
      <About />
      </section>
      </div>

      
      <div className=" relative mt-32">
        <section id='Projects'>
        <Projects />
        </section>
      </div>

      <section id='Skills'>
      <Skills />
      </section>
      <div className=" mb-32">
      <section id='Contact'>
      <Contact />
      </section>
      </div>
      <Footer />

    </>
  );
}

export default App;
