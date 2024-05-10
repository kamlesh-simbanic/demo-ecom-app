"use client";

import { addProduct } from "@/app/_actions/product";
import { ChangeEvent, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Product, initialProduct } from "@/app/assets/products";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";
import Content from "@/app/_components/products/Details";
import useEvent from "@/app/utils/use-event";

export default function ProductAdd() {
  const { dispatch } = useEvent();
  const router = useRouter();
  const [product, setProduct] = useState<Product>(initialProduct);

  const onChangeHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [target.name]: target.value,
    }));
  };

  const saveProduct = async () => {
    const result = await addProduct(product);
    dispatch("SHOW_SNACK_BAR", "Product Saved Successfully");
    router.push(`/app/products`);
  };

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
      </Row>
    </>
  );
}
