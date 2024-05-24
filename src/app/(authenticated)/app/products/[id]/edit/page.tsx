"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Product, initialProduct } from "@/app/assets/products";
import { useRouter } from "next/navigation";
import Button from "@/app/_components/button";
import useEvent from "@/app/utils/use-event";
import StackRow from "@/app/_components/stack-row";
import { updateProduct, getProduct, removeProduct } from "../../actions";
import { useFormState } from "react-dom";
import { ErrorValidation } from "@/app/types/common";
import Image from "next/image";
import Input from "@/app/_components/input";
import SubmitButton from "@/app/_components/SubmitButton";
import LoadingSkeleton from "@/app/_components/skelton/details";

const initialState: {
  validations?: any;
  success?: string;
  error?: string;
} = {
  validations: {},
  success: "",
  error: "",
};

export default function ProductEdit({ params }: { params: { id: string } }) {
  const { dispatch } = useEvent();
  const router = useRouter();
  const { id } = params;

  const [product, setProduct] = useState<Product>(initialProduct);
  const [state, formAction] = useFormState(updateProduct, initialState);
  const titie = useRef<string>("");

  const formRef = useRef<HTMLFormElement>(null);

  const validations: ErrorValidation = state?.validations || {};

  const onChangeHandle = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [target.name]: target.value,
    }));
  };

  const loadProduct = async (id: string) => {
    const result = await getProduct(id);
    setProduct(result);
    titie.current = result.name;
  };

  const deleteProduct = async () => {
    await removeProduct(id);
    dispatch("SHOW_SNACK_BAR", "Product Removed Successfully");
    router.replace("/app/products");
  };

  useEffect(() => {
    loadProduct(id);
  }, [id]);

  useEffect(() => {
    if (state.success) {
      if (formRef.current) {
        formRef.current.reset();
      }
      router.replace(`/app/products/${id}`);
      dispatch("SHOW_SNACK_BAR", state.success);
    }
  }, [id, router, state.success]);

  if (!product || !product.id) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      {/* {state!.success!.length > 0 && (
        <p className="text-success">{state!.success}</p>
      )} */}
      {state!.error!.length > 0 && (
        <p className="text-danger">{state!.error}</p>
      )}
      <h3>{titie.current}</h3>
      <Form ref={formRef} action={formAction} autoComplete="off">
        <Container>
          <Input type="hidden" value={id} name="id" />
          <Input
            label="Name"
            name="name"
            error={validations["name"]}
            value={product.name}
            onChange={onChangeHandle}
          />
          <Row>
            <Col md={6} xs={12}>
              <Input
                type="number"
                name="price"
                label="Price"
                error={validations["price"]}
                value={product.price}
                onChange={onChangeHandle}
              />
            </Col>
            <Col md={6} xs={12}>
              <Input
                type="number"
                name="quantity"
                label="Quantity"
                error={validations["quantity"]}
                value={product.quantity}
                onChange={onChangeHandle}
              />
            </Col>
          </Row>

          <Input
            type="text"
            name="shortDesc"
            label="Short Description"
            error={validations["shortDesc"]}
            value={product.shortDesc}
            onChange={onChangeHandle}
          />

          <Row>
            <Col md={3} sm={12}>
              <Form.Label>Image:</Form.Label>
            </Col>
            <Col md={6} sm={12}>
              <Image
                src={"/images/image1.jpg"}
                alt="My Image"
                width={500}
                height={300}
              />
            </Col>
          </Row>
        </Container>

        <StackRow>
          <SubmitButton />
        </StackRow>
      </Form>
      <StackRow>
        <Button
          label="Delete"
          variant="danger"
          onClick={() => {
            dispatch("DELETE_MODAL_SHOW", {
              content: product.name,
              onConfirm: deleteProduct,
            });
          }}
        />
      </StackRow>
    </>
  );
}
