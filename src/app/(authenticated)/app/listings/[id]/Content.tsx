"use client";

import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import { ListingProvider } from "./ListingProvider";
// import Notes from "./Notes";
// import { Note } from "./Notes/types";
import { ListingHeader, ListingStatus } from "./types";
import { Body } from "./styles";

type Props = {
  children: ReactNode;
  listingId: string;
  listingHeader?: ListingHeader;
  listingAddress?: string;
  notes: any[] | undefined;
  userEmail: string;
};

const Content = ({
  listingId,
  children,
  listingHeader,
  notes,
  userEmail,
  listingAddress,
}: Props) => (
  <ListingProvider
    marketId={listingHeader?.opportunityAttributes?.marketId}
    listingId={listingId}
    status={listingHeader?.status as ListingStatus}
    address={listingAddress || ""}
  >
    <Container fluid>
      {listingHeader && (
        <Row>
          <Col>
            <Header id={listingId} listing={listingHeader} />
          </Col>
        </Row>
      )}
      <Row>
        <Col>
          <Body>{children}</Body>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Notes listingId={listingId} notes={notes} userEmail={userEmail} /> */}
        </Col>
      </Row>
    </Container>
  </ListingProvider>
);

export default Content;
