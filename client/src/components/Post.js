import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../styles/Post.css";
import { useMutation } from "@apollo/client";
import { ADD_FEED } from "../utils/mutations";
import { MdOutlinePersonPin } from "react-icons/md";

function Post() {
  const [feedStatus, setFeedStatus] = useState({
    status: "",
    problem: false,
  });

  const [problem, setProblem] = useState(false);
  const checkboxHandler = () => {
    setProblem((current) => !current);
  };

  useEffect(() => {
    console.log(problem);
  }, [problem]);

  const [addPost] = useMutation(ADD_FEED);

  const postOnSubmit = async (e) => {
    e.preventDefault();

    console.log(feedStatus, problem);

    setFeedStatus({ status: feedStatus.status, problem: problem });

    try {
      const { data } = await addPost({
        variables: {
          feedData: { status: feedStatus.status, problem: problem },
        },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(feedStatus, problem);

  return (
    <>
      <Container fluid className="post-container">
        <form onSubmit={postOnSubmit}>
          <div className="form-group">
            <label id="post-icon" for="status">
              <MdOutlinePersonPin />
            </label>
            <input
              type="text"
              name="status"
              id="status"
              className="feedBox"
              value={feedStatus.status}
              onChange={(e) => {
                setFeedStatus({ [e.target.name]: e.target.value });
              }}
              placeholder="Inform your community"
            />
          </div>
          <div className="form-group2">
            <label className="boxLabel">
              <input
                type="checkbox"
                name="problem"
                className="checkBox"
                value={problem}
                onChange={checkboxHandler}
              />
              Problem?!
            </label>
            <button className="button" type="submit">
              Click Here
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default Post;
