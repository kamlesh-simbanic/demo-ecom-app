"use client";

import SubmitButton from "@/app/_components/SubmitButton";
import Input from "@/app/_components/input";
import StackRow from "@/app/_components/stack-row";
import { IUser, useUserService } from "@/app/_services";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FieldValues, RegisterOptions } from "react-hook-form";

export default function SignUp() {
  const userService = useUserService();

  const {
    register,
    trigger,
    getValues,
    formState: { isValid, errors },
    reset,
    clearErrors,
    setFocus,
  } = useForm({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trigger();

    if (!isValid) return;

    const data = getValues() as IUser;

    await userService.register(data);
  };

  const registerOptions: { [key: string]: RegisterOptions<FieldValues> } = {
    name: {
      required: "Name is required",
      minLength: {
        value: 5,
        message: "Name must have at least 5 characters",
      },
    },
    email: { required: "Email is required" },
    mobile: {
      required: "mobile is required",
      minLength: {
        value: 10,
        message: "Mobile must have 10 digits",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
    role: { required: "Role is required" },
  };

  const getErrorMessage = (field: string) => {
    const error = errors?.[field] && errors?.[field]?.message;
    return error as string;
  };

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <>
      <h3>Sign Up</h3>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          name="name"
          label="Name"
          register={{ ...register("name", registerOptions.name) }}
          rules={registerOptions.name}
          error={getErrorMessage("name")}
        />

        <Input
          register={{ ...register("mobile", registerOptions.mobile) }}
          rules={registerOptions.mobile}
          error={getErrorMessage("mobile")}
          label="Mobile"
          name="mobile"
        />

        <Input
          register={{ ...register("email", registerOptions.email) }}
          label="Email*"
          name="email"
          rules={registerOptions.email}
          error={getErrorMessage("email")}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          register={{ ...register("password", registerOptions.password) }}
          rules={registerOptions.password}
          error={getErrorMessage("password")}
        />

        <StackRow>
          <SubmitButton label={"Sign Up"} />
          <Button
            onClick={() => {
              reset();
              clearErrors();
            }}
          >
            Reset
          </Button>
        </StackRow>
      </Form>
    </>
  );
}
