export enum Tabs {
  Overview = "Overview",
  AccessIssues = "AccessIssues",
  Access = "Access",
  Offers = "Offers",
  Services = "Services",
  ListingDetails = "ListingDetails",
  PropertyDetails = "PropertyDetails",
  ListingEngagement = "ListingEngagement",
  Commissions = "Commissions",
}

export const URLs: { [tab: string]: string } = {
  [Tabs.Overview]: "",
  [Tabs.AccessIssues]: "/access-issues",
  [Tabs.Access]: "/access",
  [Tabs.Offers]: "/offers",
  [Tabs.Services]: "/services",
  [Tabs.ListingDetails]: "/listing-details",
  [Tabs.PropertyDetails]: "/property-details",
  [Tabs.ListingEngagement]: "/listing-engagement",
  [Tabs.Commissions]: "/commissions-and-expenses",
};

export const getTab = (pathname: string): Tabs => {
  if (pathname.includes(URLs[Tabs.ListingDetails])) return Tabs.ListingDetails;
  if (pathname.includes(URLs[Tabs.Offers])) return Tabs.Offers;
  if (pathname.includes(URLs[Tabs.PropertyDetails]))
    return Tabs.PropertyDetails;
  if (pathname.includes(URLs[Tabs.Services])) return Tabs.Services;
  if (pathname.includes(URLs[Tabs.ListingEngagement]))
    return Tabs.ListingEngagement;
  if (pathname.includes(URLs[Tabs.Commissions])) return Tabs.Commissions;
  if (pathname.includes(URLs[Tabs.AccessIssues])) return Tabs.AccessIssues;
  if (pathname.includes(URLs[Tabs.Access])) return Tabs.Access;
  return Tabs.Overview;
};
