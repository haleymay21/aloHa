import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import LocalsForm from "../components/LocalsForm";
import { useMutation, useQuery } from "@apollo/client";
import { FIND_LOCALS } from "../utils/queries";
const Locals = () => {
  const { loading, data } = useQuery(FIND_LOCALS);
  const localsData = data?.findLocals || [];
  console.log(localsData);
  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {localsData.map((local) => {
          return (
            <MDBCol>
              <MDBCard className="our-locals">
                <MDBCardImage
                  // src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                  // src="https://mymodernmet.com/wp/wp-content/uploads/archive/kCNkeHozTY469iw7DRRo_dianakim1.jpg"
                  // src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/09/10/88050b5e08504e7cb859abadc25ae18c_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
                  src={local.image}
                  alt="..."
                  position="top"
                  className="local-images"
                />
                <MDBCardBody>
                  <MDBCardTitle className="local-name">
                    {local.name}
                  </MDBCardTitle>
                  <MDBCardText className="card-text">
                    <h7>Hometown:</h7>
                    <p>{local.hometown}</p>
                    <h7>
                      What would you like people in the neighborhood to know
                      about you?
                    </h7>
                    <p>{local.whatToKnow}</p>
                    <h7>What things/support would benefit you the most?</h7>
                    <p>{local.support}</p>
                    <h7>Where can your community members find you?</h7>
                    <p>{local.whereAreYou}</p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          );
        })}
        {/* <MDBCol>
          <MDBCard className="our-locals">
            <MDBCardImage
              // src="https://mdbootstrap.com/img/new/standard/city/043.webp"

              src="https://static01.nyt.com/images/2014/06/23/us/HOMELESS/HOMELESS-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"
              alt="..."
              position="top"
              className="local-images"
            />
            <MDBCardBody>
              <MDBCardTitle className="local-name">NAME</MDBCardTitle>
              <MDBCardText className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="our-locals">
            <MDBCardImage
              // src="https://mdbootstrap.com/img/new/standard/city/042.webp"
              src="https://wpcdn.us-midwest-1.vip.tn-cloud.net/www.honolulumagazine.com/content/uploads/data-import/3f4328e4/splash-Homeless-in-Honolulu.png"
              alt="..."
              position="top"
              className="local-images"
            />
            <MDBCardBody>
              <MDBCardTitle className="local-name">NAME</MDBCardTitle>
              <MDBCardText className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol> */}
      </MDBRow>

      <Container>
        <LocalsForm></LocalsForm>
      </Container>
    </>
  );
};

export default Locals;
