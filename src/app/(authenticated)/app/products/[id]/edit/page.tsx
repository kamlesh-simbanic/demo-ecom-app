"use client";

import { Product, initialProduct } from "@/app/assets/products";
import Content from "../content";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "@/app/_actions/product";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";

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

  const loadProduct = async (id: string) => {
    const result = await getProduct(id);
    setProduct(result);
  };

  const saveProduct = () => {
    updateProduct(id, { ...product, id });
    router.replace(`/app/products/${id}`);
  };

  const deleteProduct = async () => {
    await removeProduct(id);
    router.replace("/app/products");
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
          <Button label="Delete" variant="danger" onClick={deleteProduct} />
        </Col>
      </Row>
    </>
  );
}
