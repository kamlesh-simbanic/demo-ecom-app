"use client";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useUserService } from "@/app/_services";
import { ErrorValidation } from "@/app/types/common";
import Input from "@/app/_components/input";
import StackRow from "@/app/_components/stack-row";
import SubmitButton from "@/app/_components/SubmitButton";

export default function SignIn() {
  const userService = useUserService();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [validations, setValidations] = useState<ErrorValidation>({});

  const onChangeHandle = ({ name, value }: { name: string; value: string }) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = (): {
    isValid: boolean;
    errors: ErrorValidation;
  } => {
    const errors: ErrorValidation = {};

    if (!data.email) {
      errors.email = "Email is required";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { errors, isValid } = validate();

    setValidations(errors);

    if (!isValid) return;

    await userService.login(data.email, data.password);
  };

  return (
    <>
      <h3>Sign In</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => onChangeHandle(e.target)}
          error={validations.email}
        />

        <Input
          label="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => onChangeHandle(e.target)}
          error={validations.password}
        />
        <StackRow>
          <SubmitButton label={"Sign In"} />
        </StackRow>
      </Form>
    </>
  );
}
