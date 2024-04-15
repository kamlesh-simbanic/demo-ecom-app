"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  getProduct,
  removeProduct,
  updateProduct,
} from "@/app/_actions/product";
import { Product, initialProduct } from "@/app/assets/products";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";
import Content from "@/app/_components/products/Details";

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

  const saveProduct = async () => {
    await updateProduct(id, { ...product, id });
    router.push(`/app/products/${id}`);
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
