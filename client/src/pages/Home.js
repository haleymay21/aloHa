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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            aliquet bibendum enim facilisis gravida neque convallis. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt
            eget. Elit ut aliquam purus sit amet luctus. Arcu risus quis varius
            quam quisque id diam. Mauris ultrices eros in cursus. Accumsan lacus
            vel facilisis volutpat.
          </p>{" "}
          <br></br>{" "}
          <p className="about-us-description">
            Ultricies leo integer malesuada nunc vel risus commodo viverra. Id
            consectetur purus ut faucibus pulvinar. Magna sit amet purus gravida
            quis blandit. Integer quis auctor elit sed vulputate. Ultricies
            tristique nulla aliquet enim tortor at auctor urna. Nulla malesuada
            pellentesque elit eget gravida cum sociis natoque. Adipiscing
            commodo elit at imperdiet dui accumsan.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Home;
