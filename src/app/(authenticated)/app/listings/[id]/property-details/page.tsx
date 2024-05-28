import { Card } from "@mui/material";

import Form from "./Form";
import { propertyDetails } from "@/app/assets/opportunity/details";

type Props = {
  params: { id: string };
};

const PropertyDetails = async ({ params }: Props) => {
  return (
    <Card role="form" className="p-3">
      <Form
        propertyDetails={propertyDetails.opportunity}
        listingId={params.id}
        options={propertyDetails.options}
      />
    </Card>
  );
};

export default PropertyDetails;
