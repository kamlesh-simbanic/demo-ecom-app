"use client";

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Product } from "../assets/products";

const ProductCard = (props: Product) => {
  const { name, shortDesc, price } = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={"/images/image1.jpg"} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{shortDesc}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Add Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
