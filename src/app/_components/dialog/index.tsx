import React, { ReactNode } from "react";

// import DisplayOnlyIf from "@components/DisplayOnlyIf";

import {
  Actions,
  CloseButton,
  CloseIcon,
  Content,
  Header,
  IconHolder,
  Text,
  Title,
  Wrapper,
} from "./styles";
import DisplayOnlyIf from "../DisplayOnlyIf";

type Props = {
  heading: string;
  text?: string;
  Icon?: ReactNode;
  children: ReactNode;
  maxWidth?: number;
  onClose: () => void;
  open: boolean;
  closeIcon?: boolean;
  actions?: ReactNode;
  className?: string;
};

const Dialog = ({
  className,
  heading,
  text,
  Icon,
  children,
  open,
  maxWidth = 500,
  onClose,
  closeIcon = false,
  actions,
}: Props) => (
  <Wrapper
    aria-modal="true"
    className={className}
    open={open}
    onClose={onClose}
    $maxWidth={maxWidth}
    $actions={!!actions}
  >
    <Header>
      <Title>
        <DisplayOnlyIf condition={!!Icon}>
          <IconHolder>{Icon}</IconHolder>
        </DisplayOnlyIf>
        {heading}
      </Title>
      <DisplayOnlyIf condition={closeIcon}>
        <CloseButton onClick={onClose} aria-label="Close dialog">
          <CloseIcon />
        </CloseButton>
      </DisplayOnlyIf>
    </Header>
    <Content>
      <DisplayOnlyIf condition={!!text}>
        <Text>{text}</Text>
      </DisplayOnlyIf>
      {children}
    </Content>
    <DisplayOnlyIf condition={!!actions}>
      <Actions>{actions}</Actions>
    </DisplayOnlyIf>
  </Wrapper>
);

export default Dialog;
