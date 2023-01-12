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
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

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
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Books!</h1>
        </Container>
      </Jumbotron>

      <Container>
        <LoginForm></LoginForm>
        <CardColumns></CardColumns>
      </Container>
    </>
  );
};

export default Home;
