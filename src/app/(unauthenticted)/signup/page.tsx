"use client";
import SubmitButton from "@/app/_components/SubmitButton";
import Input from "@/app/_components/input";
import StackRow from "@/app/_components/stack-row";
import { useUserService } from "@/app/_services";
import { ErrorValidation } from "@/app/types/common";
import { useState } from "react";
import { Form } from "react-bootstrap";

export default function SignUp() {
  const userService = useUserService();

  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    mobile: "",
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

    if (!data.name) {
      errors.name = "Name is required";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    }

    if (!data.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = "Mobile number is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
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
    await userService.register(data);
  };

  return (
    <>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          placeholder="Enter name"
          name="name"
          label="Name"
          onChange={(e) => onChangeHandle(e.target)}
          error={validations.name}
        />

        <Input
          label="Mobile"
          placeholder="Enter mobile"
          name="mobile"
          onChange={(e) => onChangeHandle(e.target)}
          error={validations.mobile}
        />

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
          <SubmitButton label={"Sign Up"} />
        </StackRow>
      </Form>
    </>
  );
}
