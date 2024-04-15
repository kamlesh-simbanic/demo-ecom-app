"use client";
import { useUserService } from "@/app/_services";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function SignUp() {
  const userService = useUserService();

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const onChangeHandle = ({ name, value }: { name: string; value: string }) => {
    console.log({ name, value });

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await userService.register(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          name="name"
          onChange={(e) => onChangeHandle(e.target)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="mobile"
          placeholder="Enter mobile"
          name="mobile"
          onChange={(e) => onChangeHandle(e.target)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => onChangeHandle(e.target)}
        />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => onChangeHandle(e.target)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
