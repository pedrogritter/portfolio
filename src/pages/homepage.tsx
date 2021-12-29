import React from "react";
import Footer from "../components/footer";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import Header from "../components/header";
import About from "../components/home/about";
import Details from "../components/home/details";
import Navbar from "../components/shared/navbar";

const Homepage = () => {

    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Details />
            <Footer />        
        </>
    );
};

export default Homepage;