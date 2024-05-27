import { useContext } from "react";
import { OpportunityContext } from "../page";
import Input from "@/app/_components/input";

const PrimaryInfo = () => {
  const { opportunity, handleChange } = useContext(OpportunityContext);

  return (
    <>
      <Input
        label={"Portfolio id"}
        name="portfolio_id"
        value={opportunity?.portfolio_id ?? ""}
        onChange={handleChange}
      />
    </>
  );
};

export default PrimaryInfo;
