"use client";

import { useShoppingCart } from "@/app/providers/cart";
import Link from "next/link";
import React, { useState } from "react";
import { Navbar, Form, FormControl, Container, Nav } from "react-bootstrap";

import { useUserService } from "@/app/_services";
import Button from "../button";

function NavbarComponent({ isAuthenticated }: any) {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  async function logout() {
    setLoggingOut(true);
    await userService.logout();
    setLoggingOut(false);
  }

  const { totalItems } = useShoppingCart();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href={isAuthenticated ? "/app" : "/home"}>
          OG SHOP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-5 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              href={isAuthenticated ? "/app" : "/home"}
              className="nav-link"
            >
              Home
            </Link>
            <Link href={"/dashboard"} className="nav-link">
              Dashboard
            </Link>
            {!isAuthenticated && (
              <Link href="/products" className="nav-link">
                Products
              </Link>
            )}
            {isAuthenticated && (
              <>
                <Link href="/app/products" className="nav-link">
                  Products
                </Link>
                <Link href="/app/orders" className="nav-link">
                  Orders
                </Link>
                <Button
                  variant="outline-danger"
                  label={
                    loggingOut ? (
                      <span className="spinner-border spinner-border-sm"></span>
                    ) : (
                      <span>Logout</span>
                    )
                  }
                  onClick={logout}
                  disabled={loggingOut}
                />
              </>
            )}
          </Nav>
          {!isAuthenticated && (
            <Nav>
              <Link href="/signin" className="nav-link">
                Sign In
              </Link>
              <Link href="/signup" className="nav-link">
                Sign Up
              </Link>
            </Nav>
          )}
          {isAuthenticated && (
            <>
              <Form className="d-flex justify-content-between">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className={`me-2 ${
                    showSearch ? "visible rounded" : "invisible"
                  }`}
                  aria-label="Search"
                  onBlur={() => setShowSearch(!showSearch)}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
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
                <Link href="/app/cart">
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
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
