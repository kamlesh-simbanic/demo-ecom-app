import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const CustomTextField = ({
  name,
  rules,
  isInvalid,
  label,
  readOnly = false,
  value,
  type = "text",
}: any) => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder="-"
        size="sm"
        isInvalid={isInvalid}
        readOnly={readOnly}
        value={value}
        {...register(name, rules)}
      />
      <Form.Control.Feedback type="invalid">
        {isInvalid && "This field is required."}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default CustomTextField;
