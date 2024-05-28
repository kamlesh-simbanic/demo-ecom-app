export const listingEngagement = {
  id: "c0f13791-b467-4d6a-8fb8-be6a02760e8a",
  dispoListingId: "3a67ea0f-c5ae-4e9e-a37b-a2cb4d454d32",
  showings: 2,
  views: 0,
  saves: 2,
  createdAt: "2024-05-27T16:45:15.305Z",
  updatedAt: "2024-05-27T16:45:15.305Z",
  discardedAt: null,
  syndicationLastCollected: "2024-05-27",
  syndicationLink: "eos umerus verbum",
};

export const commissionsAndExpenses = {
  commissions: {
    listingSideCommissionType: "flat_fee",
    listingSideCommissionPercentage: null,
    listingSideFlatFee: "3.0",
    buyingSideCommissionType: "flat_fee",
    buyingSideCommissionPercentage: null,
    buyingSideFlatFee: "0.0",
    commissionsFinalizedDate: "2024-02-15",
    notes: "",
    listingSideGrossCommission: "3.0",
    listingSideTotalCommissionReduction: "9.0",
    listingSideNetCommission: "-6.0",
    buyingSideGrossCommission: "0.0",
    totalReimbursableExpensesOnHud: "0.0",
    totalCommissionPercentage: "0.0",
    totalCommissionAmount: "3.0",
    // reductionsAttributes: [[Object], [Object], [Object], [Object]],
  },
  options: {
    commission: {
      buyingSideCommissionType: [
        { value: "percentage", label: "Percentage" },
        { value: "flat_fee", label: "Flat Fee" },
      ],
      listingSideCommissionType: [
        { value: "percentage", label: "Percentage" },
        { value: "flat_fee", label: "Flat Fee" },
      ],
    },
    reductionsAttributes: {
      listingSideCommissionReductionType: [
        { value: "hud_concession", label: "HUD Concession" },
        { value: "technology_fee", label: "Technology Fee" },
        { value: "referral_fee", label: "Referral Fee" },
      ],
    },
  },
};
