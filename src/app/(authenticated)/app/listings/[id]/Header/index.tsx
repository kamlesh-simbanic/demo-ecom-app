import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

import { Tab } from "react-bootstrap";
import { URLs, getTab, Tabs as TabsT } from "../utils";
import { SyntheticEvent, useEffect, useState } from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import { FormControl, Tabs, Tooltip } from "@mui/material";

import {
  Address,
  // Breadcrumb,
  BreadcrumbLink,
  BreadcrumbText,
  BreadcrumbWrapper,
  Buttons,
  Content,
  ImageHolder,
  Info,
  ListingInfo,
  Price,
  SerialNumber,
  StyledButton,
  StyledChip,
  StyledImage,
  StyledSelect,
  StyledTab,
  Summary,
  TabWrapper,
  Wrapper,
} from "./styles";
import {
  BathtubOutlined,
  BedOutlined,
  ChevronRight,
  Construction,
  ContentCopy,
  LocationOnOutlined,
  OpenInNewOutlined,
  SquareFoot,
} from "@mui/icons-material";
import { currencyFormat, formatNumber } from "@/app/utils/misc";

const Header = async ({ id, listing }: any) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabsT>(getTab(pathname));

  useEffect(() => {
    setActiveTab(getTab(pathname));
  }, [pathname]);

  const onTabChange = (newTab: number) => {
    setActiveTab(newTab);
    router.push(`/app/listings/${id}${URLs[newTab]}`);
  };

  const handleTabChange = (
    e: SyntheticEvent<Element, Event>,
    newTab: number
  ) => {
    onTabChange(newTab);
  };

  const handleCopySerialNumber = () => {
    navigator.clipboard.writeText(String(listing.serialNumber));
    // openSnackbar("success", "Serial number copied to clipboard");
  };

  return (
    <div style={{ backgroundColor: "azure" }}>
      <Breadcrumb>
        <BreadcrumbWrapper>
          <BreadcrumbLink href="/app/opportunities">
            <BreadcrumbText>Transactions List</BreadcrumbText>
          </BreadcrumbLink>
          <ChevronRight />
          <BreadcrumbText data-sentry-mask>
            {listing?.opportunityAttributes?.streetAddress},{" "}
            {listing?.opportunityAttributes?.city},{" "}
            {listing?.opportunityAttributes?.state}{" "}
            {listing?.opportunityAttributes?.zip}
          </BreadcrumbText>
        </BreadcrumbWrapper>

        <SerialNumber variant="button" onClick={handleCopySerialNumber}>
          Serial #:{" "}
          <strong data-testid="serialNumber">{listing?.serialNumber}</strong>
        </SerialNumber>
      </Breadcrumb>
      <Content role="complementary">
        <Info>
          <ImageHolder>
            {/* <StyledImage
              src={Illustration}
              alt={`${listing?.opportunityAttributes?.streetAddress}, ${listing?.opportunityAttributes?.city}, ${listing?.opportunityAttributes?.state} ${listing?.opportunityAttributes?.zip}`}
              width={78}
              height={78}
            /> */}
          </ImageHolder>
          <div>
            <Tooltip
              title="Click to copy address"
              placement="bottom"
              arrow={false}
            >
              <div>
                <Address
                  // onClick={()}
                  data-sentry-mask
                  data-testid="fullAddress"
                >
                  {listing?.opportunityAttributes?.streetAddress},{" "}
                  {listing?.opportunityAttributes?.city},{" "}
                  {listing?.opportunityAttributes?.state}{" "}
                  {listing?.opportunityAttributes?.zip}
                </Address>
              </div>
            </Tooltip>
            <Summary>
              {listing?.opportunityAttributes?.marketName && (
                <ListingInfo data-testid="location">
                  <LocationOnOutlined />{" "}
                  <strong>{listing?.opportunityAttributes?.marketName}</strong>
                </ListingInfo>
              )}
              <ListingInfo data-testid="bedroom">
                <BedOutlined />{" "}
                <strong>
                  {
                    listing?.opportunityAttributes?.propertyDetailAttributes
                      ?.beds
                  }
                </strong>
              </ListingInfo>
              <ListingInfo data-testid="bathroom">
                <BathtubOutlined />
                <Tooltip
                  title={
                    <>
                      Bath details
                      <br />
                      <br />
                      {
                        listing?.opportunityAttributes?.propertyDetailAttributes
                          ?.fullBaths
                      }{" "}
                      - full bath
                      <br />
                      {
                        listing?.opportunityAttributes?.propertyDetailAttributes
                          ?.halfBaths
                      }{" "}
                      - 1/2
                      <br />
                      {
                        listing?.opportunityAttributes?.propertyDetailAttributes
                          ?.threeQuarterBaths
                      }{" "}
                      - 3/4
                      <br />
                      {
                        listing?.opportunityAttributes?.propertyDetailAttributes
                          ?.quarterBaths
                      }{" "}
                      - 1/4
                    </>
                  }
                >
                  <strong>
                    <u>
                      {
                        listing?.opportunityAttributes?.propertyDetailAttributes
                          ?.fullBaths
                      }
                    </u>
                  </strong>
                </Tooltip>
              </ListingInfo>
              <ListingInfo data-testid="squareFeet">
                <SquareFoot />
                <strong>
                  {formatNumber(
                    listing?.opportunityAttributes?.propertyDetailAttributes
                      ?.buildingSqft
                  )}{" "}
                  sqft
                </strong>
              </ListingInfo>
              <ListingInfo data-testid="yearBuilt">
                {/* <CertifiedHouse viewBox="0 0 20 20" />{" "} */}
                <strong>
                  {
                    listing?.opportunityAttributes?.propertyDetailAttributes
                      ?.yearBuilt
                  }
                </strong>
              </ListingInfo>
              {listing?.["underConstruction?"] && (
                <ListingInfo data-testid="status">
                  <StyledChip
                    label={
                      <>
                        <Construction />
                        Work in progress
                      </>
                    }
                    color="warning"
                    variant="outlined"
                    size="small"
                  />
                </ListingInfo>
              )}
            </Summary>
            <Summary>
              <Price data-sentry-mask data-testid="currentListPrice">
                {true ? (
                  <>
                    <b>
                      {currencyFormat(Number(listing?.currentContractPrice))}
                    </b>{" "}
                    contract price
                  </>
                ) : (
                  <>
                    <b>{currencyFormat(Number(listing?.listPrice))}</b> current
                    list price
                  </>
                )}
              </Price>
              ●
              <span data-testid="daysOnMarket">
                <b>{listing?.daysOnMarket} days</b> on market
              </span>
              ●
              <span data-sentry-mask data-testid="customer">
                <b>{listing?.sellerAttributes.name}</b> customer
              </span>
              {listing?.syndicationLink && (
                <>
                  ●
                  <a href={listing?.syndicationLink} target="_blank">
                    View Public Listings <OpenInNewOutlined />
                  </a>
                </>
              )}
            </Summary>
          </div>
        </Info>
        <Buttons>
          <FormControl fullWidth>
            <StyledSelect
              size="small"
              value={"new"}
              onChange={() => {}}
              disabled={false}
            >
              {/* {Object.entries(ListingStatus)
                .filter(([, value]) => !!value)
                .map(([key, value]) => (
                  <MenuItem key={value} value={value}>
                    <Chip
                      label={key}
                      variant="light"
                      color={getListingStatusColor(value)}
                    />
                  </MenuItem>
                ))} */}
            </StyledSelect>
          </FormControl>
          <StyledButton onClick={() => {}}>
            <ContentCopy />
            Copy Offer Link
          </StyledButton>
        </Buttons>
      </Content>
      <div className="d-flex justify-content-between align-items-center">
        <span>Listing Status Guide</span>
        <Button variant="link" onClick={handleCopySerialNumber}>
          Serial #:{" "}
          <strong data-testid="serialNumber">{listing?.serialNumber}</strong>
        </Button>
      </div>
      <Tabs value={activeTab} onChange={handleTabChange}>
        <StyledTab label="Overview" />
        <StyledTab label="Access & Issues" />
        <StyledTab label="Access" />
        <StyledTab
          label={<TabWrapper>Offers ({listing?.offerCount})</TabWrapper>}
        />
        <StyledTab label="Services" />
        <StyledTab label="Listing Details" />
        <StyledTab label="Property Details" />
        <StyledTab label="Listing Engagement" />
        <StyledTab label="Commissions & Expenses" />
      </Tabs>
    </div>
  );
};

export default Header;
