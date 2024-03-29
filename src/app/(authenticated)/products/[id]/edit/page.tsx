"use client";

import { Product, initialProduct } from "@/app/assets/products";
import Content from "../content";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "@/app/services/products";
import { useRouter } from "next/navigation";
import Button from "@/app/components/button";

export default function ProductEdit({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;
  const [product, setProduct] = useState<Product>(initialProduct);

  const onChangeHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [target.name]: target.value,
    }));
  };

  const loadProduct = (id: string) => {
    const result = getProduct(params.id);
    setProduct(result);
  };

  const saveProduct = () => {
    updateProduct(id, product);
    router.push(`/products/${id}`);
  };

  useEffect(() => {
    loadProduct(id);
  }, [id]);

  return (
    <>
      <Content
        product={product}
        readOnly={false}
        onChangeHandle={onChangeHandle}
      />
      <Row>
        <Col xs={12} md={3}>
          <Button label="Save" onClick={saveProduct} />
        </Col>
        <Col xs={12} md={3}>
          <Button
            label="Delete"
            variant="danger"
            onClick={() => {
              removeProduct(id);
              router.replace("/products");
            }}
          />
        </Col>
      </Row>
    </>
  );
}
