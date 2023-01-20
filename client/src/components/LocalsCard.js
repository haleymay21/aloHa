import React, { useState } from "react";
import { Modal, Tab, Button } from "react-bootstrap";

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

import { useQuery } from "@apollo/client";
import { FIND_LOCALS } from "../utils/queries";
import "../styles/Locals.css";

const LocalsCard = () => {
  const { data } = useQuery(FIND_LOCALS);
  const localsData = data?.findLocals || [];
  console.log(localsData);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {localsData.map((local) => {
          return (
            <MDBCol>
              <Button
                id="locals-card-button"
                onClick={() => setShowModal(true)}
              >
                Show Modal
              </Button>
              <Modal
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="locals-card-modal"
              >
                <Tab.Container defaultActiveKey="new-card">
                  <Modal.Header closeButton>
                    <Modal.Title id="locals-card-modal">
                      <p id="modal-card-title">
                        {" "}
                        &nbsp;&nbsp;Add a New Profile &nbsp;&nbsp;
                      </p>
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body handleModalClose={() => setShowModal(false)}>
                    <Tab.Content>
                      <Tab.Pane eventKey="new-card">
                        <MDBCard
                          handleModalClose={() => setShowModal(false)}
                          className="our-locals"
                        >
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
                            <div>
                              <MDBCardText>
                                <div>
                                  <h7 className="card-text-prompts">
                                    Hometown:
                                  </h7>
                                  <p class="card-text-answers">
                                    {local.hometown}
                                  </p>
                                </div>
                                <div>
                                  <h7 className="card-text-prompts">
                                    What would you like people in the
                                    neighborhood to know about you?
                                  </h7>
                                  <p class="card-text-answers">
                                    {local.whatToKnow}
                                  </p>
                                </div>
                                <div>
                                  <h7 className="card-text-prompts">
                                    What things/support would benefit you the
                                    most?
                                  </h7>
                                  <p class="card-text-answers">
                                    {local.support}
                                  </p>
                                </div>
                                <div>
                                  <h7 className="card-text-prompts">
                                    Where can your community members find you?
                                  </h7>
                                  <p class="card-text-answers">
                                    {local.whereAreYou}
                                  </p>
                                </div>
                              </MDBCardText>
                            </div>
                          </MDBCardBody>
                          <MDBCardFooter>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </MDBCardFooter>
                        </MDBCard>
                      </Tab.Pane>
                    </Tab.Content>
                  </Modal.Body>
                </Tab.Container>
              </Modal>
            </MDBCol>
          );
        })}
      </MDBRow>
    </>
  );
};

export default LocalsCard;
