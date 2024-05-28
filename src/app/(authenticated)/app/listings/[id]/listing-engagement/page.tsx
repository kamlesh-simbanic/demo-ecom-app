import { Card } from "@mui/material";
import Form from "./Form";
import { listingEngagement } from "@/app/assets/opportunity/details";

type Props = {
  params: { id: string };
};
const ListingEngagement = async ({ params }: Props) => {
  return (
    <Card role="form">
      <Form listingId={params.id} listingEngagement={listingEngagement} />
    </Card>
  );
};

export default ListingEngagement;
