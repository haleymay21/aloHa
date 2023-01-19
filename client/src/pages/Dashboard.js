import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Post from "../components/Post";
import SideNav from "../components/SideNav";
import FeedCard from "../components/FeedCard";


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
            <Container id="feed-container">
              <FeedCard></FeedCard>
            </Container>
          </Col>
        </Row>
      </Container>{" "}
    </>
  );
};

export default Dashboard;
