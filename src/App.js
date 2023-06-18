import React, { useEffect } from "react";
import { About, Header, Footer, Skills, Work, Contact, Testimonials } from "./container";
import { Navbar } from "./components";
import "@fontsource/hepta-slab";
import Sidelinks from "./components/sidelinks/Sidelinks";


const App = () => {  
  return (
    <div>
      <Navbar />
      <Sidelinks />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
