import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Experience from "./Experience.jsx";
import React from "react";
import Works from "./Works.jsx";
import Feedbacks from "./Feedbacks.jsx";
import Contact from "./Contact.jsx";
import StarsCanvas from "./StarsCanvas.jsx";
import Tech from "./Tech.jsx";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
