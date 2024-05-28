import { Card } from "@mui/material";

import Form from "./Form";
import { commissionsAndExpenses } from "@/app/assets/opportunity/details";

type Props = {
  params: { id: string };
};

const CommissionsAndExpenses = async ({ params }: Props) => {
  return (
    <Card className="p-2">
      <Form
        commissionsAndExpenses={commissionsAndExpenses?.commissions}
        listingId={params.id}
        options={commissionsAndExpenses.options}
      />
    </Card>
  );
};

export default CommissionsAndExpenses;
