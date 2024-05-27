"use client";

import { useEffect, useState } from "react";

// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// import { useListingContext } from "@app/(authenticated)/listings/[id]/ListingProvider";
// import {
//   DiligenceAndClosingStatuses,
//   SoldClosedStatuses,
// } from "@app/(authenticated)/listings/utils";

import ListingForm from "./ListingForm";
// import OfferForm from "./OfferForm";
// import { Wrapper } from "./styles";
// import { fetchSnapshot, getOfferSnapshot } from "../actions";
// import { Offersnapshot, SnapshotDetails } from "../types";

// type Props = {
//   snapshotDetails: SnapshotDetails;
//   listingId: string;
//   offersnapshot?: Offersnapshot;
// };

type Props = {
  snapshotDetails: any;
  listingId: string;
  offersnapshot?: any;
};

const snap = {
  id: "3a67ea0f-c5ae-4e9e-a37b-a2cb4d454d32",
  sellerId: "5e70b818-ab86-47d7-ae2c-3063c00b9855",
  statusLabel: "New",
  showings: 0,
  status: "new",
  transactionType: "shortsale",
  initialListPrice: 4,
  listPrice: 3,
  entityStatusAssociation: "closing",
  conforming: "Yes",
  securitizedAsset: "no",
  distressedAsset: false,
  photoStatus: null,
  photoStatusLabel: null,
  serviceLevel: null,
  serviceLevelLabel: null,
  yardSignRemovedDate: null,
  sellerEntityId: "f7fc571f-7b59-4e2a-ba81-83ada638aa00",
  fieldVisitRequestedDate: "2024-05-14",
  fieldVisitCompletedDate: "2024-05-14",
  intakeDate: "2024-05-24",
  projectedEnteraAccessDate: "2024-05-24",
  actualEnteraAccessDate: "2024-05-24",
  expectedListDate: "2024-05-24",
  onMarketDate: "2024-05-24",
  listingAgreementDate: "2024-05-24",
  mustSellByDate: "2024-05-24",
  originalListingDate: "2024-05-24",
  listingExpirationDate: "2024-05-24",
  yardSignInstallationDate: "2024-05-24",
  offerPeriodEndDate: "2024-05-24",
  proPhotosUpdatedDate: "2024-05-24",
  propertyConditionPhotoLink: "https://demanding-deduce.name",
  propertyConditionVideoLink: "https://hurtful-heel.name",
  propertyConditionNotes: "cursim amor suadeo canis tego",
  sellerDispoIdentifier: "conqueror natus stella arbor turba",
  yardSignStatus: "removed",
  cancellationDate: "2024-05-24",
  cancellationReason: "entera_fees",
  cancellationNote: "porro harum territo depereo video",
  listingTerminationDate: "2024-05-24",
  listingTerminationReason: "selling_in_portfolio",
  listingTerminationReasonNote: "debilito a umquam spes conicio",
  evaluationInputs: [],
  evaluationAttributes: {
    price: "5.0",
    dueDate: null,
    requestDate: null,
    completionDate: null,
    blockDate: "2024-05-24",
    blockReason: "Inaccessible",
    blockReasonNote: "adaugeo facilis amo nobis territo",
    enteraEvaluationLink: "https://wicked-rail.com",
  },
  accessAttributes: {
    showingInstructions: "appointment_required",
    occupiedByTenant: true,
    vacancyDate: null,
    lockboxInstalledDate: "2024-05-14",
    lockboxRemovedDate: null,
    lockboxType: "supra",
    accessNotes: "concedo aveho adduco perferendis damnatio",
    showingCode: "tredecim aliquam terebro decretum ambitus",
    clientLockboxCode: "patria animadverto stipes adversus collum",
    lockboxSerialNumber: "cupiditate depromo aliquam vulgivagus venio",
    lastPropertyVisit: null,
    showingHoldDate: "2024-05-24",
    showingHoldReason: "Tenant In Place",
    showingHoldReasonNotes: "asperiores demitto benevolentia aspicio validus",
  },
  constructionAttributes: {
    inProgress: "No",
    estScopeAmount: "1.0",
    approvedScopeAmount: "3.0",
    completionEst: "2024-05-24",
    actualCompletionDate: null,
    note: "viduo verbera ademptio ter decet",
  },
  mlsRecordsAttributes: [
    {
      id: "bc10b060-b54e-4649-a4eb-7a995606aa2c",
      mlsSourceId: "5cd3f188-f869-4740-9892-b0cce1157fe0",
      number: "S15DS485D",
      primary: true,
      status: "sold",
    },
  ],
};

const Form = ({ listingId, snapshotDetails, offersnapshot }: Props) => {
  const [details, setDetails] = useState<any>(snap);
  const [snapshot, setSnapshot] = useState<any>(offersnapshot);
  const [loading, setLoading] = useState<boolean>(false);
  //   const { status, setHasStatusChange, hasStatusChange } = useListingContext();

  //   useEffect(
  //     () => () => {
  //       setHasStatusChange(false);
  //     },
  //     []
  //   );

  //   useEffect(() => {
  //     async function fetch() {
  //       setLoading(true);
  //       const newDetails = (await fetchSnapshot(listingId)) as SnapshotDetails;
  //       const newSnapshot = (await getOfferSnapshot(listingId)) as Offersnapshot;
  //       setDetails(newDetails);
  //       setSnapshot(newSnapshot);
  //       setLoading(false);
  //     }

  //     if (hasStatusChange) fetch();
  //   }, [status]);

  return (
    // <Wrapper disabled={loading} role="article">
    //   <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     {DiligenceAndClosingStatuses.includes(status) ||
    //     SoldClosedStatuses.includes(status) ? (
    //       <OfferForm offersnapshot={snapshot} listingId={listingId} />
    //     ) : (
    <ListingForm snapshotDetails={details} listingId={listingId} />
    //     )}
    //   </LocalizationProvider>
    // </Wrapper>
  );
};

export default Form;
