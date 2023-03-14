import React, { useEffect } from "react";
import { About, Header, Footer, Skills, Work, Contact, Testimonials } from "./container";
import { Navbar } from "./components";
import "@fontsource/hepta-slab";


const App = () => {  
  return (
    <div>
      <section  id="home" >
        <Navbar />
        <Header />
        <div className="black-overlay"></div>
      </section>
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
