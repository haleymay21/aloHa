import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const SideNav = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};
  console.log(error);
  console.log(userData);

  return (
    <>
      <Nav
        className="col-md-12 d-none d-md-block sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <p id="first-name">{userData.firstname}</p>{" "}
        <p id="last-name">{userData.lastname}</p>
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
