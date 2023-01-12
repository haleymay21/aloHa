import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import Auth from "../utils/auth";

const AppNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            MINI LOGO WILL GO HERE{" "}
          </Navbar.Brand>
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show link for feed, profiles and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/">
                    Your Feed
                  </Nav.Link>
                  <Nav.Link as={Link} to="/saved">
                    Local Profiles
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/signup">
                  Create an Account
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
