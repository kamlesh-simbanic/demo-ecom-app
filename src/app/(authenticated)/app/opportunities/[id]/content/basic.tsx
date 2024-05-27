import { useContext } from "react";
import { OpportunityContext } from "../page";
import Input from "@/app/_components/input";

const Basic = () => {
  const { opportunity, handleChange } = useContext(OpportunityContext);

  return (
    <>
      <Input
        label="Name"
        name="name"
        value={opportunity.name}
        onChange={handleChange}
      />
    </>
  );
};

export default Basic;
