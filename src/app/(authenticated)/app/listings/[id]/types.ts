import { Dayjs } from "dayjs";

export type File = {
  id: number;
  name: string;
  size: number;
  type: string;
  subtype: string;
  date: string;
};

export type History = {
  id: number;
  user: string;
  date: Dayjs;
  hour: string;
  type: "contractSent" | "contractGenerated" | "movedTransaction";
  value: string;
};

export type Task = {
  id: number;
  name: string;
  status: TaskStatus;
  dueDate: string;
  completedDate?: string;
  assigned: string;
};

export type TaskList = {
  id: number;
  name: string;
  notes?: string;
  tasks: Task[];
};

type MlsRecordsAttributes = {
  primary: boolean;
  sourceName: string;
  sourceEnteraBackendId: number;
  number: string;
  status: string;
};

export type ListingHeader = {
  id: string;
  currentContractPrice?: number;
  listPrice: string;
  initialListPrice: string;
  serialNumber: number;
  daysOnMarket: number;
  status: ListingStatus;
  statusLabel: string;
  "underConstruction?": boolean;
  syndicationLink: string;
  offerCount: number;
  propertyConditionPhotoLink: string;
  propertyConditionVideoLink: string;
  sellerAttributes: {
    id: string;
    name: string;
  };
  opportunityAttributes: {
    marketId?: number;
    marketName?: string;
    streetAddress: string;
    city: string;
    state: string;
    zip: string;
    propertyType: string;
    propertyDetailAttributes: {
      beds: boolean;
      buildingSqft: number;
      fullBaths: boolean;
      halfBaths: boolean;
      lotSqft: boolean;
      pool: boolean;
      quarterBaths: number;
      stories: number;
      threeQuarterBaths: number;
      winterized: boolean;
      yearBuilt: number;
    };
  };
  accessAttributes: {
    clientLockboxCode: string;
  };
  evaluationAttributes: {
    enteraEvaluationLink: string;
  };
  sellerContactAttributes?: {
    name: string;
    email: string;
  };
  mlsRecordsAttributes: MlsRecordsAttributes[];
};

type SummaryListing = {
  id: string;
  initialListPrice: string;
  lastPriceChangeDelta: string;
  lastPriceChangeDate: string;
  avgOtl: string;
  highestOffer: string;
  showings: number;
  showingsLastWeek: number;
};

type SummaryOffers = {
  newOffers: number;
  offerReportSent: string;
  totalOffers: number;
  offersThisWeek: number;
};

type SummaryAcceptedOffer = {
  id: string;
  acceptanceDate: string;
  offerPrice: string;
  otl: number;
  dueDiligenceEndDate: string;
  closingDate: string;
  earnestMoneyStatus: string;
  escrowEarnestMoney: string;
};

export type Summary = {
  listing: SummaryListing;
  offers: SummaryOffers;
  acceptedOffer: SummaryAcceptedOffer;
};

export enum SummaryReceivingStatuses {
  "Receiving Offers" = "receiving_offers",
  "Showings Temporarily On Hold" = "showings_temporarily_on_hold",
}

export enum SummaryDueDiligenceStatuses {
  "Due Diligence Period" = "due_diligence_period",
  "Sale Pending" = "sale_pending",
  "Ready To Close" = "ready_to_close",
  "Offer Pending Termination" = "offer_pending_termination",
  "Closed - Pending Closeout" = "closed_pending_closeout",
  "Closed - Ready For Review" = "closed_ready_for_review",
  "Closed - Final" = "closed_final",
}

export enum ListingStatus {
  "All statuses" = "",
  New = "new",
  "Evaluation Preparation" = "evaluation_preparation",
  "Field Visit" = "field_visit",
  "Analyst Eval" = "analyst_evaluation",
  "Manager Eval" = "manager_evaluation",
  "Evaluation Completed" = "evaluation_completed",
  "Evaluation Blocked" = "evaluation_blocked",
  "Evaluation Submitted To Client" = "evaluation_submitted_to_client",
  "Evaluation Canceled" = "evaluation_canceled",
  "Pending Lease Expiration" = "pending_lease_expiration",
  "LA Requested" = "la_requested",
  "LA Awaiting Seller Review" = "la_awaiting_seller_review",
  "Listing Approved" = "listing_approved",
  "Awaiting Tenant Offer Response" = "awaiting_tenant_offer_response",
  "Pre Selling Cancelled" = "pre_selling_cancelled",
  "Temporarily Off Market" = "temporarily_off_market",
  "Receiving Offers" = "receiving_offers",
  "Showings Temporarily On Hold" = "showings_temporarily_on_hold",
  "Due Diligence Period" = "due_diligence_period",
  "Due Diligence Amended" = "due_diligence_amended",
  "Sale Pending" = "sale_pending",
  "Sale Pending Amended" = "sale_pending_amended",
  "Ready To Close" = "ready_to_close",
  "Offer Pending Termination" = "offer_pending_termination",
  "Closed Pending Final Docs" = "closed_pending_final_docs",
  "Closed Ready For Review" = "closed_ready_for_review",
  "Closed Final" = "closed_final",
  "Terminated" = "terminated",
}

export enum TaskStatus {
  Pending = "pending",
  Completed = "completed",
  "Exemption Requested" = "exemption_required",
  Exempted = "exempted",
  "N/A" = "not_applicable",
}


export type MLS = {
  primary: boolean;
  mlsSourceId: string;
  id: string;
  status: string;
};

export type Entity = {
  id: string;
  contractName: string;
  signatureBlock: string;
  status: 'active' | 'inactive';
};

export type MlsSource = {
  id: string;
  name: string;
  mlsUrl?: string;
};

export type Option = {
  value: string;
  label: string;
};

export type Options = {
  conformings: Option[];
  entityStatusAssociations: Option[];
  listingTerminationReasons: Option[];
  cancellationReasons: Option[];
  securitizedAssets: Option[];
  transactionTypes: Option[];
  lockboxTypes: Option[];
  showingHoldReasons: Option[];
  showingInstructions: Option[];
  constructionInProgress: Option[];
  blockReasons: Option[];
  mlsSources: MlsSource[];
  mlsStatuses: Option[];
  yardSignStatuses: Option[];
  serviceLevels: Option[];
  photoStatuses: Option[];
  evaluationInputs: Option[];
};

export type ListingDetails = {
  serviceLevel: string;
  photoStatus: string;
  distressedAsset: boolean;
  yardSignRemovedDate: string | null;
  evaluationInputs: string[];
  initialListPrice: number | null;
  listPrice: number | null;
  transactionType: string;
  listingTerminationReason: string;
  cancellationReason: string;
  cancellationDate: string;
  conforming: string;
  securitizedAsset: string;
  entityStatusAssociation: string;
  listingTerminationReasonNote: string;
  cancellationNote: string;
  fieldVisitRequestedDate: string;
  fieldVisitCompletedDate: string;
  dueDate: string;
  originalListingDate: string;
  listingAgreementDate: string;
  mustSellByDate: string;
  onMarketDate: string;
  offerPeriodEndDate: string;
  listingExpirationDate: string;
  listingTerminationDate: string;
  intakeDate: string;
  projectedEnteraAccessDate: string;
  actualEnteraAccessDate: string;
  expectedListDate: string;
  yardSignInstallationDate: string;
  proPhotosUpdatedDate: string;
  sellerId: string;
  sellerEntityId: string | null;
  evaluationAttributes: {
    enteraEvaluationLink: string;
    requestDate: string | Dayjs | undefined;
    dueDate: string | Dayjs | undefined;
    completionDate: string | Dayjs | undefined;
    blockDate: string;
    blockReason: string;
    blockReasonNote: string;
    price: number | null;
  };
  constructionAttributes: {
    inProgress: string;
    estScopeAmount: string;
    approvedScopeAmount: string;
    completionEst: string;
    actualCompletionDate: string;
    note: string;
  };
  accessAttributes: {
    lockboxRemovedDate: string | null;
    showingInstructions: string;
    occupiedByTenant: boolean;
    lockboxInstalledDate: string;
    lockboxType: string;
    accessNotes: string;
    showingCode: string;
    clientLockboxCode: string;
    lockboxSerialNumber: string;
    lastPropertyVisit: string;
    showingHoldDate: string;
    showingHoldReason: string;
    showingHoldReasonNotes: string;
  };
  entityNames: Entity[];
  mlsRecordsAttributes: MLS[];
  propertyConditionPhotoLink: string;
  propertyConditionVideoLink: string;
  propertyConditionNotes: string;
  sellerDispoIdentifier: string;
  yardSignStatus: string;
};

