import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// import theme from "@theme";
// import { withAttrs } from "@utils/styledHOC";

export const Wrapper = styled("div")<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "default")};
`;

export const Label = styled(Typography)`
  color: black;
  margin: 0 0 24px;
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 12px;
`;

export const SubRow = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;
