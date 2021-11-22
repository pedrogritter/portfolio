import React from "react";
import Footer from "../components/footer";
// import { useHistory } from "react-router-dom";
// import styled from "styled-components";
import Header from "../components/header";
import Navbar from "../components/shared/navbar";

const Homepage = () => {

    return (
        <>
            <Navbar />
            <Header />

            <Footer />        
        </>
    );
};

export default Homepage;