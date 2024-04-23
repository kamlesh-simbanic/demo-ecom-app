"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Product } from "../../assets/products";
import Link from "next/link";
import { useShoppingCart } from "../../providers/cart";
import Image from "next/image";

const imageSize = { width: 300, height: 300 };

export const currencyFormatter = (value: number) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

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
      <Card
        style={{ width: "18rem" }}
        className="border border-danger overflow-hidden"
      >
        <div
          style={{
            position: "relative",
            width: imageSize.width,
            height: imageSize.height,
          }}
        >
          <Image
            src="/images/image1.jpg"
            alt={name}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Card.Body style={{ paddingRight: "1rem" }}>
          <Link
            href={isAuthenticated ? `/app/products/${id}` : `/products/${id}`}
          >
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text>{shortDesc}</Card.Text>
          <Card.Text>{currencyFormatter(price)}</Card.Text>
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
