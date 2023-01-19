// import style package here with specific style components
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { FIND_ALL } from "../utils/queries";
import "../styles/FeedCard.css";
import { MdOutlinePersonPin } from "react-icons/md";
const FeedCard = () => {
  // space for any variables like useState
  const { error, data } = useQuery(FIND_ALL);
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
                      <Card
                        id="problem-card"
                        style={{ width: "50rem", backgroundColor: "" }}
                      >
                        <Card.Body>
                          <Card.Title id="name">
                            <MdOutlinePersonPin /> {user.firstname}{" "}
                            {user.lastname}{" "}
                          </Card.Title>
                          <Card.Subtitle id="date" className="mb-2">
                            {feed.createdAt}
                          </Card.Subtitle>
                          <br></br>
                          <Card.Subtitle>
                            <br></br>
                            {feed.status}
                          </Card.Subtitle>
                        </Card.Body>
                      </Card>
                    ) : (
                      <Card style={{ width: "50rem" }}>
                        <Card.Body>
                          <Card.Title id="name">
                            <MdOutlinePersonPin /> {user.firstname}{" "}
                            {user.lastname}{" "}
                          </Card.Title>
                          <Card.Subtitle id="date" className="mb-2t">
                            {feed.createdAt}
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
