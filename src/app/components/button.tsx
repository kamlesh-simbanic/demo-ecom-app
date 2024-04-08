import { Button as BsButton } from "react-bootstrap";

const Button = ({
  variant = "primary",
  label,
  onClick = () => ({}),
  disabled = false,
}: {
  onClick?: () => void;
  label: string | JSX.Element;
  variant?: string;
  disabled?: boolean;
}) => {
  return (
    <>
      <BsButton variant={variant} onClick={onClick} disabled={disabled}>
        {label}
      </BsButton>
    </>
  );
};

export default Button;
