import { Card } from "@mui/material";

import Form from "./Form";
import {
  listingDetails,
  listingDetailsOptions,
} from "@/app/assets/opportunity/details";

type Props = {
  params: { id: string };
};

const ListingDetailsPage = async ({ params }: Props) => {
  return (
    <Card className="p-2">
      <Form
        listingDetails={listingDetails}
        listingId={params.id}
        options={listingDetailsOptions}
      />
    </Card>
  );
};

export default ListingDetailsPage;
