"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Product } from "../../assets/products";
import Link from "next/link";
import { useShoppingCart } from "../../providers/cart";
import { auth } from "../../_helpers/server";

const ProductCard = ({
  isAuthenticated,
  product,
}: {
  product: Product;
  isAuthenticated: boolean;
}) => {
  const { id, name, shortDesc, price } = product;

  const { addItem } = useShoppingCart();

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={"/images/image1.jpg"} />
        <Card.Body>
          <Link
            href={isAuthenticated ? `/app/products/${id}` : `/products/${id}`}
          >
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text>{shortDesc}</Card.Text>
          <Card.Text>{price}</Card.Text>
          {isAuthenticated && (
            <Button variant="primary" onClick={() => addItem(id)}>
              Add Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
