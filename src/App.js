import React from "react";
import { About, Header, Footer, Skills, Work, Contact } from "./container";
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
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
