import React from "react";
import Footer from "../components/footer";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import Header from "../components/header";
import About from "../components/home/about";
import Details from "../components/home/details";
import Projects from "../components/home/projects";
import Navbar from "../components/shared/navbar";

const Homepage = () => {

    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Details />
            <Projects />
            <Footer />        
        </>
    );
};

export default Homepage;