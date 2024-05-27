import { Col, Container, Row } from "react-bootstrap";
import { Column, Columns } from "./styles";
import PriceTimeLine from "./PriceTimeLine";
import RecentOfferComparison from "./RecentOfferComparison";
import Snapshot from "./SnapShot";

type Props = {
  params: { id: string };
};

const Page = async ({ params }: Props) => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg={8}>
          <PriceTimeLine />
          <Snapshot listingId={params.id} />
        </Col>
        <Col lg={4}>
          <RecentOfferComparison />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
