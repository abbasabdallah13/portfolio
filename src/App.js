import React from "react";
import { About, Header, Footer, Skills, Work } from "./container";
import { Navbar } from "./components";
const App = () => {
  return (
    <div>
      <section style={{ backgroundColor: "#f9e59c" }} id="about">
        <Navbar />
        <Header />
      </section>
      <About />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
