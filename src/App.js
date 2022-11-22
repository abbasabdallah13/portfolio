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
        <div style={{position: 'absolute', top: '0', left:'0', width: '100vw', maxWidth: '100%'  , height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: '0'}}></div>
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
