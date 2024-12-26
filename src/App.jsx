import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar"; // Correctly importing Navbar

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      {/* Add other sections here */}
      <section id="home">Home Section</section>
      <section id="about">About Section</section>
      <section id="projects">Projects Section</section>
      <section id="contact">Contact Section</section>
    </div>
  );
};

export default App;
