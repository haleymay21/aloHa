import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import LoginForm from "../components/LoginForm";
import AlohaLogo from "../assets/download.png";
import { CaretDown } from "react-bootstrap-icons";

const Home = () => {
  return (
    <>
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
        <h1 id="about-us-title">About Us</h1>
      </Container>
    </>
  );
};

export default Home;
