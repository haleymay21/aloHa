import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import { useMutation } from "@apollo/client";
import { ADD_LOCAL } from "../utils/mutations";

import Auth from "../utils/auth";

const LocalsForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    name: "",
    hometown: "",
    whatToKnow: "",
    support: "",
    whereAreYou: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addLocal, { error }] = useMutation(ADD_LOCAL);

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData);
    try {
      const { data } = await addLocal({
        variables: { ...userFormData },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      name: "",
      hometown: "",
      whatToKnow: "",
      support: "",
      whereAreYou: "",
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="What is your name/nickname?"
            name="name"
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        {/* <Form.Group>
          <Form.Label htmlFor="lastname">Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your lastname"
            name="lastname"
            onChange={handleInputChange}
            value={userFormData.lastname}
            required
          />
          <Form.Control.Feedback type="invalid">
            Last name is required!
          </Form.Control.Feedback>
        </Form.Group> */}

        <Form.Group>
          <Form.Label htmlFor="hometown">Hometown</Form.Label>
          <Form.Control
            type="text"
            placeholder="Where are you from?"
            name="hometown"
            onChange={handleInputChange}
            value={userFormData.hometown}
            required
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="whatToKnow">About</Form.Label>
          <Form.Control
            type="whatToKnow"
            placeholder="What would you like people in the neighborhood to know about you?"
            name="whatToKnow"
            onChange={handleInputChange}
            value={userFormData.whatToKnow}
            required
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="support">Support</Form.Label>
          <Form.Control
            type="support"
            placeholder="What kind of things/support would benefit you the most?"
            name="support"
            onChange={handleInputChange}
            value={userFormData.support}
            required
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="whereAreYou">Location</Form.Label>
          <Form.Control
            type="whereAreYou"
            placeholder="Where can your community find you?"
            name="whereAreYou"
            onChange={handleInputChange}
            value={userFormData.whereAreYou}
            required
          />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Button
          //   disabled={
          //     !(
          //       userFormData.name &&
          //       userFormData.hometown &&
          //       userFormData.whatToKnow &&
          //       userFormData.support &&
          //       userFormData.whereAreYou
          //     )
          //   }
          type="submit"
          variant="success"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LocalsForm;
