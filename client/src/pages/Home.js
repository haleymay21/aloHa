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
import { ArrowBarDown } from "react-bootstrap-icons";

const Home = () => {
  // // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     const { data } = await saveBook({
  //       variables: { bookData: { ...bookToSave } },
  //     });
  //     console.log(savedBookIds);
  //     setSavedBookIds([...savedBookIds, bookToSave.bookId]);
  //   } catch (err) {
  //     console.error(err);
  //   }

  return (
    <>
      <Jumbotron fluid className="jumbo bg-white">
        <Container>
          <img id="logo" src={AlohaLogo} alt="react logo" />
          <p id="mission">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p id="us">About Us</p>
          <a href="#" className="arrow-icon">
            <ArrowBarDown />
          </a>
        </Container>
      </Jumbotron>

      <Container className="login-form">
        <LoginForm></LoginForm>
        <CardColumns></CardColumns>
      </Container>
      <Container fluid className="about-us bg-primary">
        <section>
          <h1>About Us</h1>
        </section>
      </Container>
    </>
  );
};

export default Home;
