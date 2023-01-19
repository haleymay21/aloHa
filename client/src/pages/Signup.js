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

const Signup = () => {
  return (
    <>
      <Container>
        <SignupForm></SignupForm>
        <CardColumns></CardColumns>
      </Container>
    </>
  );
};

export default Signup;
