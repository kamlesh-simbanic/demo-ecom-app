"use client";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUserService } from "@/app/_services";

export default function SignIn() {
  const userService = useUserService();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandle = ({ name, value }: { name: string; value: string }) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await userService.login(data.email, data.password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={data.email}
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
          value={data.password}
          name="password"
          onChange={(e) => onChangeHandle(e.target)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
