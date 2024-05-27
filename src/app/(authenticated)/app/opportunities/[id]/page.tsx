"use client";

import { initialOpportunity } from "@/app/assets/opportunity/opportunity";
import { OpportunityEntity } from "@/app/types/opportunity-types";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import opportunityList from "@/app/assets/opportunity/opportunity-list.json";
import Content from "./content";
import { createContext } from "react";
import { effectsOfFields } from "./helper";

type OpportunityContextType = {
  opportunity: OpportunityEntity;
  handleChange: (e: any) => void;
  changeWithEffect: (e: any) => void;
};

export const OpportunityContext = createContext<OpportunityContextType>({
  opportunity: initialOpportunity,
  handleChange: (e: any) => ({}),
  changeWithEffect: (e: any) => ({}),
});

export const useOpportunity = () => {
  const context = useContext(OpportunityContext);
  if (!context) {
    throw new Error(
      "useOpportunity must be used within a OpportunityContextProvider"
    );
  }
  return context;
};

const OpportunityDetails = ({ params }: { params: { id: string } }) => {
  const [opportunity, setOpportunity] =
    useState<OpportunityEntity>(initialOpportunity);

  const [field, setField] = useState<string | null>("");

  const handleChange = (e: any) => {
    setOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [e.target.name]: e.target.value,
    }));
  };

  const changeWithEffect = (e: any) => {
    handleChange(e);
    setField(e.target.name);
  };

  useEffect(() => {
    if (field) {
      const result = effectsOfFields[field].afterChange!(opportunity);
      setOpportunity((prevOpportunity) => ({
        ...prevOpportunity,
        ...result,
      }));
      setField(null);
    }
  }, [field]);

  return (
    <>
      <Container fluid>
        <h3>{opportunityList[0].name}</h3>
        <OpportunityContext.Provider
          value={{ opportunity, handleChange, changeWithEffect }}
        >
          <Content />
        </OpportunityContext.Provider>
      </Container>
    </>
  );
};

export default OpportunityDetails;
