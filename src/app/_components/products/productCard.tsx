"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Product } from "../../assets/products";
import Link from "next/link";
import { useShoppingCart } from "../../providers/context";
import Image from "next/image";

const imageSize = { width: 250, height: 200 };

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
  const { id, name, shortDesc, price, quantity } = product;

  const { addItem } = useShoppingCart();

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="border border-danger overflow-hidden d-flex flex-column flex-sm-row flex-row flex-md-column"
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
            className="text-decoration-none"
          >
            <Card.Title>{name}</Card.Title>
          </Link>
          <Card.Text>{shortDesc}</Card.Text>
          <Card.Text>{currencyFormatter(price)}</Card.Text>
          {isAuthenticated && (
            <>
              {quantity === 0 ? (
                <Card.Text className="text-danger">Out of Stock</Card.Text>
              ) : (
                <Button variant="primary" onClick={() => addItem(product)}>
                  Add Cart
                </Button>
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
