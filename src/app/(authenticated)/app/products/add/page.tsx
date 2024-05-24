"use client";

import { addProduct } from "../actions";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ErrorValidation } from "@/app/types/common";
import StackRow from "@/app/_components/stack-row";
import SubmitButton from "@/app/_components/SubmitButton";
import Image from "next/image";
import Input from "@/app/_components/input";
import { useFormState } from "react-dom";
import { ProductPayload } from "@/app/assets/products";
import { validateProduct } from "./helper";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  validations: {},
  success: "",
  error: "",
};

export default function ProductAdd() {
  const router = useRouter();
  const [appState, setAppState] = useState(initialState);
  const [state, formAction] = useFormState(addProduct, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // let validations: ErrorValidation = state?.validations || {};
  let validations: ErrorValidation = appState?.validations || {};

  const saveProduct = (formData: FormData) => {
    const payload: ProductPayload = {
      name: formData.get("name") as string,
      price: parseInt(formData.get("price") as string),
      quantity: parseInt(formData.get("quantity") as string),
      shortDesc: formData.get("shortDesc") as string,
      imageUrl: "",
    };
    const { errors, isValid } = validateProduct(payload);
    setAppState((appState) => ({ ...appState, validations: errors }));

    if (!isValid) return;
    formAction(payload);
  };

  useEffect(() => {
    if (state.success) {
      if (formRef.current) {
        formRef.current.reset();
      }
      setAppState(initialState);
      setTimeout(() => {
        router.replace(`/app/products`);
      }, 2000);
    }
  }, [router, state.success]);

  return (
    <>
      {state!.success!.length > 0 && (
        <p className="text-success">{state!.success}</p>
      )}
      {state!.error!.length > 0 && (
        <p className="text-danger">{state!.error}</p>
      )}
      <Form ref={formRef} action={saveProduct} autoComplete="off">
        <Container>
          <Input label="Name" name="name" error={validations["name"]} />
          <Row>
            <Col md={6} xs={12}>
              <Input
                type="number"
                name="price"
                label="Price"
                error={validations["price"]}
              />
            </Col>
            <Col md={6} xs={12}>
              <Input
                type="number"
                name="quantity"
                label="Quantity"
                error={validations["quantity"]}
              />
            </Col>
          </Row>

          <Input
            type="text"
            name="shortDesc"
            label="Short Description"
            error={validations["shortDesc"]}
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
    </>
  );
}
