import { ReactNode } from "react";
import { notFound } from "next/navigation";
// import { auth } from "@auth";
// import { fetchListingHeader, fetchNotes } from "./actions";
import Content from "./Content";
import { Container, Row, Col } from "react-bootstrap";
import { auth } from "@/app/_helpers/server";
import { ListingHeader } from "./types";

type Props = {
  params: { id: string };
  children: ReactNode;
};

const Layout = async ({ params, children }: Props) => {
  // const listingHeader = await fetchListingHeader(params.id);
  const listingHeader = {} as ListingHeader;
  if (!listingHeader) return notFound();

  const session = await auth.isAuthenticated();
  //   const userEmail = session?.user?.email || "";
  const userEmail = "kamlesh.simbanic2022@gmail.com";

  // const notes = await fetchNotes(params.id);
  const notes: any[] | undefined = [];

  return (
    <Container fluid>
      <Row>
        <Col>
          <Content
            listingId={params.id}
            listingHeader={listingHeader}
            notes={notes}
            userEmail={userEmail}
            listingAddress={listingHeader?.opportunityAttributes?.streetAddress}
          >
            {children}
          </Content>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
