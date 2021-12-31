import React from "react";
import Footer from "../components/footer";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import Header from "../components/header";
import About from "../components/home/about";
import Contact from "../components/home/contact";
import Details from "../components/home/details";
import Projects from "../components/home/projects";
import Stack from "../components/home/stack";
import Navbar from "../components/shared/navbar";

const Homepage = () => {

    return (
        <>
            <Navbar />
            <Header />
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