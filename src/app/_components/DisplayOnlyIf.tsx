import { ReactNode } from "react";

type Props = {
  condition: boolean | string;
  children: ReactNode;
};

const DisplayOnlyIf = ({ condition, children }: Props) => {
  if (!condition || condition === "0") return null;

  return children;
};

export default DisplayOnlyIf;
