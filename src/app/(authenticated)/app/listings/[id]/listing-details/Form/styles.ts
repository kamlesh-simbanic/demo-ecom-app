import { Alert, Button, FormGroup, MenuItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled("div")<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "default")};
`;

export const Label = styled(Typography)`
  color: info;
  margin: 0 0 32px;
`;

export const SubLabel = styled(Typography)`
  color: info;
  margin: 0 0 12px;
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 12px;
`;

export const StyledAlert = styled(Alert)`
  &.MuiAlert-root {
    margin-bottom: 40px;
  }
`;

export const ViewButton = styled(Button)`
  &.MuiButton-root {
    padding: 0;
    min-width: auto;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.MuiMenuItem-root {
    height: 36px;
  }
`;

export const CheckboxGroup = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 32px;
`;
