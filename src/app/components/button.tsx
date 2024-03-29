import { Button as BsButton } from "react-bootstrap";

const Button = ({
  variant = "primary",
  label,
  onClick = () => ({}),
}: {
  onClick?: () => void;
  label: string;
  variant?: string;
}) => {
  return (
    <>
      <BsButton variant={variant} onClick={onClick}>
        {label}
      </BsButton>
    </>
  );
};

export default Button;
