import { Stack } from "react-bootstrap";

import { CSSProperties, ReactNode } from "react";

interface StackRowProps {
  children: ReactNode;
  style?: CSSProperties;
  isUnitItem?: boolean;
}

const StackRow = ({ children, style = {} }: StackRowProps) => {
  return (
    <Stack direction="horizontal" gap={3} style={{ padding: "1rem", ...style }}>
      {children}
    </Stack>
  );
};

export default StackRow;
