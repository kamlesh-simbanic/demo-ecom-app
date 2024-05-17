import { Button } from "react-bootstrap";

const SubmitButton = ({
  variant = "primary",
  label = "Submit",
  disabled = false,
}: {
  label?: string | JSX.Element;
  variant?: string;
  disabled?: boolean;
}) => {
  return (
    <>
      <Button type="submit" variant={variant} disabled={disabled}>
        {label}
      </Button>
    </>
  );
};

export default SubmitButton;
