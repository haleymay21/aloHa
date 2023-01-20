// import style package here with specific style components
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";


import { FIND_ALL } from "../utils/queries";
import { UPDATE_FEED } from "../utils/mutations";
import { DELETE_FEED } from "../utils/mutations";

const FeedCard = () => {
  // space for any variables like useState
  const { error, data } = useQuery(FIND_ALL);
  const useData = data?.findAll || [];
  console.log(error);
  console.log("useData: ", useData);


  // useEffect(() => {
  // const sortCard = useData[1]


  // }, [])

  // console.log('sortedCard: ', sortCard)

  // const feedData = useData.map((data) =>
  //   data.liveFeed.map((feed, i) => feed.createdAt)
  // );
  // console.log(feedData);

  // set and change problem status by clicking checkbox in feedCard
  const [resolved, setResolved] = useState(false)
  console.log("default resolved: ", resolved)

  const [updateResolve] = useMutation(UPDATE_FEED,

    {
      refetchQueries: [
        { query: FIND_ALL }
      ],
    })

  const resovedBoxHandler = async (_id) => {

    setResolved((resolved) => !resolved)
    // console.log("statusCheck: ", status)
    // is this overriding all other data?
    try {
      const { data } = await updateResolve({
        variables:
        {
          feedId: _id,

          feedData: { problem: resolved },

        }

      })
      console.log("Resolved Data: ", data)
    } catch (e) {
      console.error("resolve error", e)
    }
  }

  // delete feed

  const [deleteFeed] = useMutation(DELETE_FEED)

  const deletePostHandler = async (_id) => {

    try {
      const { data } = await deleteFeed(
        {
          variables: {
            feedId: _id
          }
        }
      )
      console.log("deleteID: ",)
    } catch (e) {
      console.error(e)
    }

  }


  return (
    <div className="feed-card">
      {useData.map((user) => {
        return (
          <>
            {user.liveFeed.map((feed, index) => {
              return (
                <div>
                  {feed.problem === true ? (
                    <Card style={{ width: "35rem", backgroundColor: "red" }}>
                      <Card.Body>
                        <Card.Title>
                          Name: {user.firstname} {user.lastname}{" "}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Date: {feed.createdAt}
                        </Card.Subtitle>
                        <Card.Subtitle>Post: {feed.status}</Card.Subtitle>
                        <label className="resolveCheckboxTitle">
                          <input
                            type="checkbox"
                            name="resolveCheckbox"
                            className="resolveCheckbox"
                            onChange={() => resovedBoxHandler(feed._id, feed.status)}
                          />
                          Check if this problem is resolved
                        </label>
                        {/* activate below - only writer can delete the post */}
                        {/* {user&& user._id === user.ID && */}
                        <button
                          className="deleteBtn"
                          type="submit"

                          onClick={() => deletePostHandler(feed._id)}
                        >Delete</button>
                        {/* } */}
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card style={{ width: "35rem" }}>
                      <Card.Body>
                        <Card.Title>
                          Name: {user.firstname} {user.lastname}{" "}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Date: {feed.createdAt}
                        </Card.Subtitle>
                        <Card.Subtitle>Post: {feed.status}</Card.Subtitle>
                        <button
                          className="deleteBtn"
                          type="submit"
                          onClick={() => deletePostHandler(feed._id)}
                        >Delete</button>
                      </Card.Body>
                    </Card>
                  )}
                </div>
              );
            })}
          </>
        );
      })
      }
    </div>
  );
};
export default FeedCard;
