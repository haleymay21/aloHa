import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
import { removeBookId } from "../utils/localStorage";
import Post from "../components/Post";
import SideNav from "../components/SideNav";

import Auth from "../utils/auth";

const Dashboard = () => {
  return (
    <>
      <Container fluid bg->
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SideNav />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <Post></Post>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default Dashboard;
