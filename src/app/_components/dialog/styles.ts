import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const themeShadows = [
  "0px 1px 5px 0px rgba(0,0,0,0.12)",
  "0px 1px 10px 0px rgba(0,0,0,0.12)",
  "0px 1px 18px 0px rgba(0,0,0,0.12)",
  "0px 2px 2px rgba(0, 0, 0, 0.3)",
  "0px 1px 1px 0px rgba(0, 0, 0, 0.30)",
];

const shadows = {
  low: themeShadows[0],
  medium: themeShadows[1],
  high: themeShadows[2],
  mapMarker: themeShadows[3],
  tableIcon: themeShadows[4],
};

export const Wrapper = styled(Dialog, {
  shouldForwardProp: (prop) => prop !== "$maxWidth" && prop !== "$actions",
})<{ $maxWidth: number; $actions: boolean }>`
  .MuiDialog-container > .MuiPaper-root {
    border-radius: 4px;
    box-shadow: ${shadows.high};
    max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}px` : "none")};
    width: ${({ $maxWidth }) => ($maxWidth ? "100%" : "auto")};
    display: grid;
    grid-template-rows: ${({ $actions }) =>
      $actions ? "57px calc(100% - 114px) 57px" : "57px auto"};
    overflow: auto;
  }
`;

export const Content = styled(DialogContent)`
  background-color: white;
  border-radius: 8px;
  padding: 16px 24px;
  color: black;
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid darkgrey;
`;

export const Title = styled(Typography)`
  display: flex;
  align-items: center;
`;

export const IconHolder = styled("div")`
  margin-right: 12px;
  max-width: 25px;

  svg {
    max-width: 100%;
  }
`;

export const CloseButton = styled(Button)`
  &.MuiButton-root {
    padding: 0;
    min-width: auto;
  }
`;

export const CloseIcon = styled(Close)`
  width: 24px;

  path {
    fill: black;
  }
`;

export const Text = styled(Typography)`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
export const Actions = styled(DialogActions)`
  border-top: 1px solid darkgrey;
  padding: 8px;
`;
