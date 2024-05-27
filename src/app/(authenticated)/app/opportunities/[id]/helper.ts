import { OpportunityEntity } from "@/app/types/opportunity-types";

export const isEmpty = (val: any) => {
  return val == undefined || val == null || String(val).trim() == "";
};

export const isValueChanged = (obj1: any, obj2: any, field: string) => {
  return obj1?.[field] != obj2?.[field];
};

type HelperObjectKeys = {
  afterChange?: (opportunity: OpportunityEntity) => any;
  calculate?: (opportunity: OpportunityEntity) => any;
};

type HelperObject = {
  [key: string]: HelperObjectKeys;
  //   offer_to_list_c: HelperObjectKeys;
};

export const effectsOfFields: HelperObject = {
  list_price_c: {
    afterChange: (opportunity: OpportunityEntity) => {
      let result = {
        offer_to_list_c:
          effectsOfFields.offer_to_list_c.calculate!(opportunity),
      };

      return result;
    },
  },
  offer_price_c: {
    afterChange: (opportunity: OpportunityEntity) => {
      let result = {
        offer_to_list_c:
          effectsOfFields.offer_to_list_c.calculate!(opportunity),
      };

      return result;
    },
  },
  offer_to_list_c: {
    calculate: (opportunity: OpportunityEntity) => {
      if (
        !isEmpty(opportunity.list_price_c) &&
        !isEmpty(opportunity.offer_price_c)
      ) {
        if (
          parseFloat(opportunity.list_price_c ?? "") > 0 &&
          parseFloat(opportunity.offer_price_c ?? "") > 0
        ) {
          const value =
            (parseFloat(opportunity.list_price_c ?? "") /
              parseFloat(opportunity.offer_price_c ?? "")) *
            100;
          console.log("value", value);

          return value;
        }
      }

      return 0;
    },
  },
};
