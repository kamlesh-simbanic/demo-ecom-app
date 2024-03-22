"use client";
import { ChangeEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandle = ({ name, value }: { name: string; value: string }) => {
    console.log({ name, value });

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    console.log("response", response);

    if (response?.error) {
      // setLoading(false);
      // setError(response?.error);
    }
    if (response?.error === null) {
      // setLoading(false);
      // toast.success("You successfully logged in");
      // router.push("/cart");
    }
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
          We'll never share your email with anyone else.
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
