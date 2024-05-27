import { useContext } from "react";
import { OpportunityContext } from "../page";
import Input from "@/app/_components/input";

const Notes = () => {
  const { opportunity, handleChange, changeWithEffect } =
    useContext(OpportunityContext);

  return (
    <>
      <Input
        label={"Portfolio id"}
        name="addendum_no"
        value={opportunity.addendum_no ?? ""}
        onChange={handleChange}
      />

      <Input
        type="number"
        label={"list_price_c id"}
        name="list_price_c"
        value={opportunity.list_price_c ?? ""}
        onChange={changeWithEffect}
      />

      <Input
        type="number" 
        label={"offer_price_c id"}
        name="offer_price_c"
        value={opportunity.offer_price_c ?? ""}
        onChange={changeWithEffect}
      />

      <Input
        label={"offer_to_list_c id"}
        name="offer_to_list_c"
        value={opportunity.offer_to_list_c ?? ""}
        onChange={handleChange}
      />
    </>
  );
};

export default Notes;
