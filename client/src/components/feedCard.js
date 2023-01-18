// import style package here with specific style components
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { FIND_ALL } from "../utils/queries";
import "../styles/FeedCard.css"
import { BsFillClockFill } from "react-icons/bs";
import { MdOutlinePersonPin } from "react-icons/md";
const FeedCard = () => {
  // space for any variables like useState
  const { loading, error, data } = useQuery(FIND_ALL);
  const useData = data?.findAll || [];
  console.log(error);
  console.log(useData);
  const feedData = useData.map((data) =>
    data.liveFeed.map((feed, i) => feed.createdAt)
  );
  console.log(feedData);
  return (
    <div className="feed-card">
      {useData.map((user) => {
        return (
          <>
            {user.liveFeed.map((feed) => {
              return (
                <div className="feed-container">
                  <div>
                    {feed.problem === true ? (
                      <Card style={{ width: "45rem", backgroundColor: "red" }}>
                        <Card.Body>
                          <Card.Title id="name">
                          <MdOutlinePersonPin /> {user.firstname} {user.lastname}{" "}
                          </Card.Title>
                          <Card.Subtitle id="date" className="mb-2">
                          <BsFillClockFill /> {feed.createdAt}
                          </Card.Subtitle>
                          <br></br>
                          <Card.Subtitle>
                            <br></br>
                             {feed.status}
                             </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    ) : (
                      <Card style={{ width: "45rem" }}>
                        <Card.Body>
                          <Card.Title id="name">
                          <MdOutlinePersonPin /> {user.firstname} {user.lastname}{" "}
                          </Card.Title>
                          <Card.Subtitle id="date" className="mb-2t">
                          <BsFillClockFill /> {feed.createdAt}
                          </Card.Subtitle>
                          <Card.Subtitle>
                            <br></br>
                            {feed.status}
                            </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
export default FeedCard;
