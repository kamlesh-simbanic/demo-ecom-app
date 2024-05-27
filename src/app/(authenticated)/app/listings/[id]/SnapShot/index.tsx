// import { fetchSnapshot, getOfferSnapshot } from "./actions";
import Form from "./Form";
// import { SnapshotDetails } from "./types";

type Props = {
  listingId: string;
};

const Snapshot = async ({ listingId }: Props) => {
  //   const snapshotDetails = (await fetchSnapshot(listingId)) as SnapshotDetails;
  //   const offersnapshot = await getOfferSnapshot(listingId);

  const snapshotDetails = {};
  const offersnapshot = {};

  //

  if (!snapshotDetails && !offersnapshot) return;
  return (
    <Form
      snapshotDetails={snapshotDetails}
      listingId={listingId}
      offersnapshot={offersnapshot}
    />
  );
};

export default Snapshot;
