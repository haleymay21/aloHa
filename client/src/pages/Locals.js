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

const Locals = () => {
  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="our-locals">
            <MDBCardImage
              // src="https://mdbootstrap.com/img/new/standard/city/044.webp"
              // src="https://mymodernmet.com/wp/wp-content/uploads/archive/kCNkeHozTY469iw7DRRo_dianakim1.jpg"
              // src="https://wehco.media.clients.ellingtoncms.com/timesfreepress/img/photos/2014/09/10/88050b5e08504e7cb859abadc25ae18c_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
              src="https://d1l18ops95qbzp.cloudfront.net/wp-content/2018/04/Sleeping-bus-stop-homeless-houseless.jpg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
              // src="https://mdbootstrap.com/img/new/standard/city/043.webp"

              src="https://static01.nyt.com/images/2014/06/23/us/HOMELESS/HOMELESS-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
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
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <Container>
        <LocalsForm></LocalsForm>
      </Container>
    </>
  );
};

export default Locals;
