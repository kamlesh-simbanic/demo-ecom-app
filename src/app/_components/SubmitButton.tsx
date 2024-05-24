import { Button } from "react-bootstrap";

import { useFormStatus } from "react-dom";

const SubmitButton = ({
  variant = "primary",
  label = "Submit",
  disabled = false,
}: {
  label?: string | JSX.Element;
  variant?: string;
  disabled?: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        type="submit"
        variant={variant}
        disabled={disabled}
        aria-disabled={pending}
      >
        {pending ? "Submitting" : label}
      </Button>
    </>
  );
};

export default SubmitButton;
