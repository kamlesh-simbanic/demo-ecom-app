"use client";

import { useState } from "react";

import { NavLink as Link } from "@/app/_components";
import { useUserService } from "@/app/_services";
import { Navbar, Form, FormControl, Container, Nav } from "react-bootstrap";
import { useShoppingCart } from "../providers/cart";
import Button from "../components/button";

export { NavbarComponent };

function NavbarComponent() {
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const userService = useUserService();

  const { totalItems } = useShoppingCart();
  async function logout() {
    setLoggingOut(true);
    await userService.logout();
    setLoggingOut(false);
  }

  const [showSearch, setShowSearch] = useState(false);

  return (
    // <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
    //     <div className="navbar-nav">
    //         <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
    //         <NavLink href="/users" className="nav-item nav-link">Users</NavLink>
    //         <button onClick={logout} className="btn btn-link nav-item nav-link" style={{ width: '67px' }} disabled={loggingOut}>
    //             {loggingOut
    //                 ? <span className="spinner-border spinner-border-sm"></span>
    //                 : <span>Logout</span>
    //             }
    //         </button>
    //     </div>
    // </nav>
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
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/orders" className="nav-link">
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
          </Nav>

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
          </>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
