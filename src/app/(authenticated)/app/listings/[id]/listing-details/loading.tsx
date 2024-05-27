"use client";

import { Placeholder, Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled(Container)`
  display: grid;
  gap: 15px;
  padding: 18px 14px;
`;

const Loading = () => (
  <Wrapper>
    <Placeholder as="div" animation="wave">
      <Placeholder xs={12} className="rounded" style={{ height: "336px" }} />
    </Placeholder>
    <Placeholder as="div" animation="wave">
      <Placeholder xs={12} className="rounded" style={{ height: "442px" }} />
    </Placeholder>
  </Wrapper>
);

export default Loading;
