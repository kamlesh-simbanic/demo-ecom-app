"use client";

import { Alert, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers";

export const pixelsToRem = (pixels: number) => (1 / 16) * pixels;

// This converts bytes to KB, MB, GB or TB
// formatBytes(1000000) === 1 MB
export const formatBytes = (bytes: number): string => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    sizes.length - 1
  );
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};

export const Wrapper = styled("div")<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "default")};
`;

export const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled(Typography)`
  color: "black";
  margin: 0;
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 0 24px;
  width: 100%;

  &:last-child {
    margin-bottom: 16px;
  }
`;

export const StyledAlert = styled(Alert)`
  &.MuiAlert-root {
    margin-bottom: 24px;
  }
`;

export const StyledTextField = styled(TextField)`
  .MuiInputBase-root::before {
    border-color: transparent;
  }
  .MuiInputBase-input {
    font-size: ${pixelsToRem(14)}rem;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  .MuiInputBase-root::before {
    border-color: transparent;
  }
  .MuiInputBase-input {
    font-size: ${pixelsToRem(14)}rem;
  }
`;

export const NoOffersWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

export const NoOffersChild = styled("div")`
  width: 40%;
`;
