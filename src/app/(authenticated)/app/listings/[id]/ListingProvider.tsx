"use client";

import React, { ReactNode, createContext, useContext, useState } from "react";
import { Spinner, Alert } from "react-bootstrap";

// import { useSnackbarContext } from "@hooks/useSnackbar";
// import { getListingDetails } from "./";
// import { ListingDetails } from "./listing-details/types";  
import { ListingStatus, ListingDetails } from "./types";
import useEvent from "@/app/utils/use-event";

type ListingContext = {
  marketId?: number;
  address?: string;
  status: ListingStatus;
  hasStatusChange: boolean;
  setHasStatusChange: (statusChange: boolean) => void;
  setStatus: (status: ListingStatus, shouldFetch?: boolean) => void;
  listingId: string;
  fetchListing: () => Promise<ListingDetails | undefined>;
  loading: boolean;
};

const Context = createContext<ListingContext>({
  address: "",
  marketId: 0,
  status: ListingStatus.New,
  hasStatusChange: false,
  setHasStatusChange: () => {},
  setStatus: () => {},
  listingId: "",
  fetchListing: () => Promise.resolve(undefined),
  loading: false,
});

export const useListingContext = () => useContext(Context);

type Props = {
  children: ReactNode;
  status: ListingStatus;
  listingId: string;
  address: string;
  marketId?: number;
};

export const ListingProvider = ({
  children,
  status: statusProp,
  listingId,
  address = "",
  marketId,
}: Props) => {
  const { dispatch } = useEvent();
  const [status, setStatus] = useState<ListingStatus>(statusProp);
  const [hasStatusChange, setHasStatusChange] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchListing = async () => {
    setLoading(true);
    try {
      // const res = await getListingDetails(listingId);
      // return res;
      return {} as ListingDetails;
    } catch {
      dispatch("SHOW_SNACK_BAR", "An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSetStatus = (newStatus: ListingStatus) => {
    setStatus(newStatus);
    setHasStatusChange(true);
  };

  return (
    <Context.Provider
      value={{
        marketId,
        address,
        status,
        setStatus: handleSetStatus,
        hasStatusChange,
        setHasStatusChange,
        listingId,
        loading,
        fetchListing,
      }}
    >
      {loading && <Spinner animation="border" variant="primary" />}
      {children}
    </Context.Provider>
  );
};
