"use client";

import { addProduct } from "@/app/_actions/product";
import { ChangeEvent, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Product, initialProduct } from "@/app/assets/products";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";
import Content from "@/app/_components/products/Details";
import useEvent from "@/app/utils/use-event";
import { ErrorValidation } from "@/app/types/common";
import { validateProduct } from "./helper";
import StackRow from "@/app/_components/stack-row";
import SubmitButton from "@/app/_components/SubmitButton";

export default function ProductAdd() {
  const { dispatch } = useEvent();
  const router = useRouter();
  const [product, setProduct] = useState<Product>(initialProduct);
  const [validations, setValidations] = useState<ErrorValidation>({});

  const onChangeHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [target.name]: target.value,
    }));
  };

  const saveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { errors, isValid } = validateProduct(product);

    setValidations(errors);

    if (!isValid) return;

    const result = await addProduct(product);
    dispatch("SHOW_SNACK_BAR", "Product Saved Successfully");
    router.push(`/app/products`);
  };

  return (
    <>
      <Form onSubmit={saveProduct} autoComplete="off">
        <Content
          product={product}
          readOnly={false}
          onChangeHandle={onChangeHandle}
          validations={validations}
        />
        <StackRow>
          <SubmitButton />
        </StackRow>
      </Form>
    </>
  );
}
