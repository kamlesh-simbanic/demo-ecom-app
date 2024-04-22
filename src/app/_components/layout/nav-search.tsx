import { useUserService } from "@/app/_services";
import { useShoppingCart } from "@/app/providers/cart";
import Link from "next/link";
import { useState } from "react";
import { Navbar, Form, FormControl, Container, Nav } from "react-bootstrap";

const NavSearch = () => {
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
  );
};

export default NavSearch;
