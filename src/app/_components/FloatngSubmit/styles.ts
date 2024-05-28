import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// import theme from "@theme";
// import transitions from "@theme/transitions";
// import { withAttrs } from "@utils/styledHOC";

export const Wrapper = styled("nav")<{ visible: boolean }>`
  background-color: black;
  border-radius: 4px;
  padding: 8px 16px;
  position: fixed;
  bottom: ${({ visible }) => (visible ? "60px" : "-50px")};
  left: 50%;
  transform: translateX(-50%);
  transition: bottom;
  display: grid;
  grid-template-columns: auto 50px;
  align-items: center;
  gap: 12px;
  width: 320px;
  z-index: 3;
`;

export const Text = styled(Typography)`
  color: white;
  margin: 0;
`;

export const StyledButton = styled(Button)`
  &.MuiButton-root {
    border-color: white;
    color: white;
    min-width: auto;
    padding: 3px 0;

    &:disabled {
      opacity: 0.5;
    }
  }
`;
