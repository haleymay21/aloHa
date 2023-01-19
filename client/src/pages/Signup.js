import React from "react";
import {
  Container,
  CardColumns,
} from "react-bootstrap";

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
