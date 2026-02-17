import Hero from "./Components/Hero";
import Header from "./Components/Header";
import About from "./Components/About";
import Certifications from "./Components/Certifications";
import RoundedElement from "./Components/MouseFollower";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Contact from "./Components/Contact";


function hasMousePointer() {
  return window.matchMedia("(pointer:fine)").matches;
}
export default function Home() {
  return (
    <>
      {<Header />}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Certifications />
      <Project />
      <Contact />
      
      {hasMousePointer() ? <RoundedElement /> : ""}
    </>
  );
}
