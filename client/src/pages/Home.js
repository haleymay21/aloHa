import React from "react";
import {
  Container,
  CardColumns,
} from "react-bootstrap";

import LoginForm from "../components/LoginForm";
import AlohaLogo from "../assets/download.png";
import { CaretDown } from "react-bootstrap-icons";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="jumbo">
        <Container>
          <img id="logo" src={AlohaLogo} alt="react logo" />
          <p id="mission">
          <div id="mission-statement">We want people without a house to still feel a part of a community.</div>
          <div id="mission-statement2">This is a commUNITY-based app that humanizes the people you see most every day ━  
          giving you a lil information and a platform to communicate so that you can better take care of your neighbors.</div>
          </p>
        </Container>
      </Container>

      <Container className="login-form">
        <LoginForm></LoginForm>
        <CardColumns></CardColumns>
        <p id="us">Learn More</p>
        <a href="#about-us" className="arrow-icon">
          <CaretDown />
        </a>
      </Container>
      <Container fluid className="diagonal"></Container>
      <Container fluid id="about-us" className="about-us">
        <div id="container-us">
          <h1 id="about-us-title">About Us</h1>
          <p className="about-us-description">
          </p>{" "}
          <br></br>{" "}
          <p className="about-us-description">
         

          </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
