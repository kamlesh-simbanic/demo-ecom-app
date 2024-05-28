import { RadioGroup, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// import theme from "@theme";
// import { withAttrs } from "@utils/styledHOC";

export const Wrapper = styled("div")<{ disabled: boolean }>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "default")};
`;

export const Row = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 12px;
`;

export const Header = styled("header")`
  display: grid;
  grid-template-columns: auto max-content;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Title = styled(Typography)`
  color: black;
  margin: 0;
`;

export const Amount = styled(Typography)`
  color: black;
  margin: 0;
`;
export const PercentageRow = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  gap: 30px;
`;

export const BoldNumber = styled("span")`
  font-weight: 700;
`;

export const SideCommissionWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  gap: 40px;
`;

export const BottomFieldsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FeesWrapper = styled("div")`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  width: 100%;
`;

export const NotesRow = styled("div")`
  margin-bottom: 24px;
  padding: 0 12px;
`;

export const DateWrapper = styled("div")`
  margin-top: 81px;
`;
