// import style package here with specific style components
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function FeedCard(props) {
  // space for any variables like useState

  return (
    <div className="feed-card">
      <Card style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>Name:{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Date:{props.date}
          </Card.Subtitle>
          <Card.Subtitle>Post:{props.post}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
export default FeedCard;
