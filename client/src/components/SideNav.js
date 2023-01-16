import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";

const SideNav = () => {
  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/"
      >
        <p id="first-name">FirstName</p> <p id="last-name">LastName</p>
        <div className="sidebar-sticky"></div>
        <Nav.Item>
          <Nav.Link href="" className="link">
            Your Neighbors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" className="link">
            Saved Profiles
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className="link">
            Resources
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3" className="link">
            Events
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};
export default SideNav;
