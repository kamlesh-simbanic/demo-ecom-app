import { Container } from "react-bootstrap";
import { Column, Columns } from "./styles";
import PriceTimeLine from "./PriceTimeLine";
import RecentOfferComparison from "./RecentOfferComparison";

type Props = {
  params: { id: string };
};

const Page = async ({ params }: Props) => {
  return (
    <Container fluid className="mt-5">
      <Columns>
        <Column>
          <PriceTimeLine />
        </Column>
        <Column>
          <RecentOfferComparison />
        </Column>
      </Columns>
    </Container>
  );
};

export default Page;
