import { Button, Chip, Select, Tab, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

export const Wrapper = styled("header")`
  background-color: white;
  box-shadow: medium;
  position: sticky;
  top: 0;
  left: 0;

  width: 100%;
  padding: 8px 16px 0;
  z-index: 3;
`;

export const Breadcrumb = styled("div")`
  display: grid;
  grid-template-columns: auto max-content max-content;
  align-items: center;
  margin-bottom: 20px;
`;

export const SerialNumber = styled(Typography)`
  cursor: pointer;
  align-items: center;
  display: flex;
  gap: 4px;

  strong {
    color: black;
    display: block;
    max-width: 115px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const BreadcrumbWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  color: blue;
  line-height: 1;
  text-decoration: underline;
`;

export const BreadcrumbText = styled(Typography)`
  color: blue;
  margin: 0;
`;

export const Content = styled("div")`
  display: grid;
  align-items: flex-start;
  grid-template-columns: max-content auto;

  @media screen and (width <= 1120px) {
    grid-template-columns: max-content;
    grid-template-rows: auto auto;
  }
`;

export const Info = styled("div")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
`;

export const ImageHolder = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 78px;
  width: 78px;
`;

export const StyledImage = styled(Image)`
  max-height: 100%;
  max-width: 100%;
  border-radius: 4px;
`;

export const Summary = styled(Typography)`
  color: blue;
  display: flex;
  align-items: center;
  gap: 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media screen and (width <= 1620px) {
    gap: 8px;
  }

  a {
    color: purple;
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: underline;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const Price = styled(Typography)`
  color: grey;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: -4px 0;

  b {
    color: black;
    font-size: 16px;
  }
`;

export const ListingInfo = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    fill: green;
  }

  u {
    color: black;
  }
`;

export const StyledTab = styled(Tab)<{ hidden?: boolean }>`
  &.MuiButtonBase-root {
    display: ${({ hidden }) => (hidden ? "none" : "inline-flex")};
  }
`;

export const Buttons = styled("div")`
  display: grid;
  grid-template-columns: 210px max-content max-content;
  justify-content: flex-end;
  gap: 8px;

  @media screen and (width <= 1380px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }

  @media screen and (width <= 1120px) {
    justify-content: flex-start;
    margin: 8px 0;
  }
`;

export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    padding-bottom: 5px;
    padding-top: 5px;
  }
`;

export const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    height: 20px;
    width: 20px;
  }
`;

export const NewCircle = styled("span")`
  background-color: white;
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

export const TabWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StyledChip = styled(Chip)`
  width: max-content;

  .MuiChip-label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: yellow;

    svg {
      fill: yellow;
      height: 22px;
      width: 22px;
    }
  }
`;

export const Address = styled(Typography)`
  color: black;
  margin: 0 0 8px;
`;
