import {BrowserRouter} from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";

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
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StartCanves/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
