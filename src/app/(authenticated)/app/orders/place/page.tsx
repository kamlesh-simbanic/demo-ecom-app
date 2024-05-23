"use client";

import { addOrder } from "@/app/_actions/orders";
import { useShoppingCart } from "@/app/providers/cart";
import useEvent from "@/app/utils/use-event";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { validateAddress } from "./helper";
import { ErrorValidation } from "@/app/types/common";
import StackRow from "@/app/_components/stack-row";
import OrderContent from "../content/details";

export default function PlaceOrder() {
  const { cart, removeOrderedItems } = useShoppingCart();
  const { dispatch } = useEvent();
  const router = useRouter();

  const [address, setAddress] = useState({
    houseNo: "",
    street: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [validations, setValidations] = useState<ErrorValidation>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { errors, isValid } = validateAddress(address);

    setValidations(errors);

    if (!isValid) return;

    const payload = {
      ...address,
      items: cart,
      amount: cart.reduce((acc, x) => (acc += x.total), 0),
    };

    const result = await addOrder(payload);

    dispatch("SHOW_SNACK_BAR", "Order Placed Successfully");
    router.push(`/app/orders/${result.id}`);
    removeOrderedItems(cart.map((x) => x.productId));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <StackRow>
          <h1>Place Order</h1>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </StackRow>

        <OrderContent
          address={address}
          items={cart}
          readOnly={false}
          handleChange={handleChange}
          validations={validations}
        />
      </Form>
    </Container>
  );
}
