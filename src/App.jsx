import { useState } from "react";
import Navbar from "./Components/Navbar";
import { Element } from "react-scroll";
import "./App.css";

import Protection from "./Components/Protection";

import {Intro,Home,Footer,Projects,Skill,Contact} from './Components/Index'
function App() {
  return (
    <>
      <Navbar />  

      <Element name="Home">
        <Protection isAllowed={true}>
          <Home />
        </Protection>
      </Element>

      <Element name="Intro">
        <Protection isAllowed={true}>
          <Intro/>
        </Protection>
      </Element>

      <Element name="Projects">
        <Protection isAllowed={true}>
          <Projects/>
        </Protection>
      </Element>

      <Element name="Skills">
        <Protection>
          <Skill/>
        </Protection>
      </Element>

      <Element name="Contact">
        <Protection>
          <Contact/>
        </Protection>
      </Element>


      <Footer />
    </>
  );
}

export default App;
