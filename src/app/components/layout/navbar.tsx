"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Navbar, Form, FormControl, Container, Nav } from "react-bootstrap";

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [showSearch, setShowSearch] = useState(false);

  const totalItems = 0;

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">OG SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/orders" className="nav-link">
              Orders
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className={`me-2 ${showSearch ? "visible rounded" : "invisible"}`}
              aria-label="Search"
              onBlur={() => setShowSearch(!showSearch)}
            />
            <span
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                fontSize: "large",
              }}
              onClick={() => setShowSearch(!showSearch)}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <Link href="/cart">
              <span
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  fontSize: "large",
                  position: "relative",
                }}
              >
                <i className="fas fa-shopping-cart"></i>
                {totalItems > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      background: "red",
                      color: "whitact-be",
                      borderRadius: "50%",
                      padding: "5px",
                      fontSize: "12px",
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </span>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
