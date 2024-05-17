import { LogoutButton } from "./logout-button";
import { NavLink } from "../NavLink";
import NavSearch from "./nav-search";
import React from "react";

function NavbarComponent({ isAuthenticated }: any) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          href={isAuthenticated ? "/app" : "/home"}
        >
          OG SHOP
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          >
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                href={isAuthenticated ? "/app" : "/home"}
              >
                Home
              </NavLink>
            </li> */}
            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" href="/products">
                  Products
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" href="/app/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" href="/app/orders">
                    Orders
                  </NavLink>
                </li>
                <li>
                  <LogoutButton />
                </li>
              </>
            )}
          </ul>
          {!isAuthenticated && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" href="/signin">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="/signup">
                  Sign Up
                </NavLink>
              </li>
            </ul>
          )}
          {isAuthenticated && <NavSearch />}
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
