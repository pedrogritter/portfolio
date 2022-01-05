import React from "react";
import Footer from "../components/footer";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import Hero from "../components/hero";
import About from "../components/home/about";
import Contact from "../components/home/contact";
import Details from "../components/home/details";
import Projects from "../components/home/projects";
import Stack from "../components/home/stack";
import Navbar from "../components/shared/navbar";

const Homepage = () => {
  /* TODO:
  - Use Context to pass down to every component the resumeData
  - Provide CV in pdf
  - Email on the lower right corner
  - Add unit testing suite
  - Add a color/theme pallete
  */

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Details />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
};

export default Homepage;