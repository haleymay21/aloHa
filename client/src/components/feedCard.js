// import style package here with specific style components
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";


function feedCard(props) {
    // space for any variables like useState



    return(
        <div className="feed-card">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Name:{props.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Date:{props.date}</Card.Subtitle>
                    <Card.Text>
                        Status:{props.status}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
    return <div className="feed-card">{props.map(feedCard)}</div>;

};
module.exports = feedCard