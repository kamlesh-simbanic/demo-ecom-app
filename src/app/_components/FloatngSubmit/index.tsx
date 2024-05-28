import { StyledButton, Text, Wrapper } from "./styles";

type Props = {
  disabled?: boolean;
  isDirty: boolean;
  isValid?: boolean;
  onSave?: () => void;
};

const FloatingSubmit = ({
  disabled = false,
  isDirty,
  isValid = true,
  onSave,
}: Props) => {
  const handleSave = () => {
    if (onSave) onSave();
  };

  return (
    <Wrapper visible={isDirty}>
      <Text>Changes made</Text>
      <StyledButton
        type="submit"
        variant="outlined"
        color="primary"
        disabled={!isValid || !isDirty || disabled}
        size="small"
        onClick={handleSave}
      >
        Save
      </StyledButton>
    </Wrapper>
  );
};

export default FloatingSubmit;
