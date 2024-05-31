"use client";

import ControllerSelect from "@/app/_components/ControllerSelect";
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
    watch,
    resetField,
    getValues,
    control,
    formState,
    formState: { isDirty, isValid, errors, touchedFields, dirtyFields },
    setError,
    reset,
    clearErrors,
    setValue,
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

  const selectOptions = [
    { value: "student", label: "Student" },
    { value: "developer", label: "Developer" },
    { value: "manager", label: "Manager" },
  ];

  const getErrorMessage = (field: string) => {
    const error = errors?.[field] && errors?.[field]?.message;
    return error as string;
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({ name: "" });
  //   }
  // }, [formState, reset]);

  useEffect(() => {
    setError("name", { type: "custom", message: "custom message" });
  }, [setError]);

  useEffect(() => {
    setError("mobile", {
      types: {
        required: "This is required",
        minLength: "This is minLength",
      },
    });
  }, [setError]);

  return (
    <>
      <h3>Sign Up</h3>

      {errors.root?.serverError.type === 400 && (
        <p className="text-danger">server response message</p>
      )}

      <p>isDirty: {isDirty && "dirty"}</p>
      <p>touchedFields: {touchedFields.name && "touched field"}</p>
      <p>dirtyFields:{dirtyFields.name && "dirty field"}</p>
      <p>isValid: {isValid && "valid"}</p>
      <p>error: {errors.name && "error"}</p>

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

        {errors.mobile && errors.mobile.types && (
          <p>{errors.mobile?.types?.required}</p>
        )}
        {errors.mobile && errors.mobile.types && (
          <p>{errors.mobile?.types?.minLength}</p>
        )}

        <Input
          register={{ ...register("email", registerOptions.email) }}
          label="Email"
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

        {/* <ControllerSelect
          name="role"
          label="Role"
          control={control}
          rules={registerOptions.role}
          options={selectOptions}
          error={getErrorMessage("role")}
        /> */}

        <StackRow>
          <SubmitButton label={"Sign Up"} />
          <Button type="reset">Standard Reset Field Values </Button>
          <Button onClick={() => reset(undefined, { keepDirtyValues: true })}>
            Reset
          </Button>
          <Button onClick={() => resetField("name")}>Reset name</Button>
          <Button
            onClick={() => {
              const inputs = [
                {
                  type: "manual",
                  name: "name",
                  message: "Double Check This",
                },
                {
                  type: "manual",
                  name: "email",
                  message: "Triple Check This",
                },
              ];

              inputs.forEach(({ name, type, message }) => {
                setError(name, { type, message });
              });
            }}
          >
            Manual Error
          </Button>
          <Button type="button" onClick={() => clearErrors(["name", "email"])}>
            Clear name and email Errors
          </Button>
          <Button type="button" onClick={() => clearErrors()}>
            Clear all Errors
          </Button>
          <Button type="button" onClick={() => setValue("name", "Bill")}>
            setValue
          </Button>
        </StackRow>

        <StackRow>
          <button
            type="button"
            onClick={() => resetField("name", { keepError: true })}
          >
            Reset keep error
          </button>
          <button
            type="button"
            onClick={() => resetField("name", { keepTouched: true })}
          >
            Reset keep touched fields
          </button>
          <button
            type="button"
            onClick={() => resetField("name", { keepDirty: true })}
          >
            Reset keep dirty fields
          </button>
          <button
            type="button"
            onClick={() => resetField("name", { defaultValue: "New" })}
          >
            update defaultValue
          </button>
        </StackRow>
      </Form>
    </>
  );
}
