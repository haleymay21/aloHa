import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, Alert, Container } from "react-bootstrap";

const Post = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Create Post</Form.Label>
        <Form.Control type="password" placeholder="Inform your community" />
      </Form.Group>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Nature of Post{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">General</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Problem</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button variant="primary" type="submit">
        Post{" "}
      </Button>
    </>
  );
};

export default Post;
