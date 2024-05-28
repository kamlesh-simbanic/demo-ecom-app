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

const listingHeader = {
  id: "3a67ea0f-c5ae-4e9e-a37b-a2cb4d454d32",
  serialNumber: 294,
  initialListPrice: "3.0",
  listPrice: "5.0",
  currentContractPrice: null,
  daysOnMarket: 0,
  status: "new",
  statusLabel: "New",
  "underConstruction?": false,
  syndicationLink: "debeo sperno amplitudo",
  offerCount: 8,
  propertyConditionPhotoLink: "https://timely-land.info",
  propertyConditionVideoLink: "https://some-skyline.biz/",
  sellerAttributes: {
    id: "5e70b818-ab86-47d7-ae2c-3063c00b9855",
    name: "Internal Entera",
  },
  opportunityAttributes: {
    marketId: 7,
    marketName: "Atlanta",
    streetAddress: "766 W Jefferson Street",
    city: "Pearland",
    state: "Kansas",
    zip: "95774",
    propertyType: "townhouse",
    propertyDetailAttributes: {
      beds: 1,
      buildingSqft: 0,
      fullBaths: 1,
      halfBaths: 2,
      lotSqft: 2,
      pool: false,
      quarterBaths: 2,
      stories: 1,
      threeQuarterBaths: 1,
      winterized: false,
      yearBuilt: 2010,
    },
  },
  accessAttributes: {
    clientLockboxCode: "patria animadverto stipes adversus collum",
  },
  evaluationAttributes: {
    enteraEvaluationLink: "https://tiny-planning.info",
  },
  mlsRecordsAttributes: [
    {
      primary: true,
      sourceName: "DTON",
      sourceEnteraBackendId: null,
      number: "S15DS485D",
      status: "sold",
    },
  ],
  sellerContactAttributes: {
    id: "be208847-12da-423c-a1e6-67984e09d4f1",
    name: "Test Demo Test ",
    email: "test123@gmail.com",
  },
};

const Content = ({
  listingId,
  children,
  // listingHeader,
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
