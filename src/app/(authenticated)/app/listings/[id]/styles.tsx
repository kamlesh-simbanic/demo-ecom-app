"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface BodyProps {
  children: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <div style={{ padding: "16px 20px" }}>{children}</div>;
};

interface ColumnsProps {
  children: React.ReactNode[];
}

const Columns: React.FC<ColumnsProps> = ({ children }) => {
  const isSmallScreen = window.innerWidth <= 1380;

  return (
    <Container fluid>
      <Row style={{ gap: "16px" }}>
        {isSmallScreen ? (
          React.Children.map(children, (child, index) => (
            <Col key={index} xs={12} style={{ marginBottom: "16px" }}>
              {child}
            </Col>
          ))
        ) : (
          <>
            <Col style={{ width: "calc(70% - 8px)" }}>{children[0]}</Col>
            <Col style={{ width: "calc(30% - 8px)" }}>{children[1]}</Col>
          </>
        )}
      </Row>
    </Container>
  );
};

interface ColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {children}
    </div>
  );
};

export { Body, Columns, Column };
