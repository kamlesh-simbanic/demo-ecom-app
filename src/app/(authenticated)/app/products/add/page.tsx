"use client";

import { Product, initialProduct } from "@/app/assets/products";
import Content from "../[id]/content";
import { ChangeEvent, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { addProduct } from "../action";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";
import { revalidatePath } from "next/cache";

export default function ProductAdd() {
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
    console.log(result);
    revalidatePath(`/app/products`);
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
