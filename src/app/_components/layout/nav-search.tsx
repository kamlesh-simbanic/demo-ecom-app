"use client";

import { useShoppingCart } from "@/app/providers/context";
import Link from "next/link";
import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const NavSearch = () => {
  const { totalItems } = useShoppingCart();

  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <>
      <Form className="d-flex justify-content-between">
        <FormControl
          type="search"
          placeholder="Search"
          className={`me-2 ${showSearch ? "visible rounded" : "invisible"}`}
          aria-label="Search"
          onBlur={() => setShowSearch(!showSearch)}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span
          style={{
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "10px",
            fontSize: "large",
          }}
          onClick={() => setShowSearch(!showSearch)}
        >
          <BsSearch />
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
  );
};

export default NavSearch;
