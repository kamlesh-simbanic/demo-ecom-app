import { error } from "console";
import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import { Label } from "reactstrap";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string | number;
  readOnly?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  register?: any;
  rules?: RegisterOptions<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  placeholder,
  value,
  readOnly,
  label,
  onChange,
  error,
  disabled,
  register = () => ({}),
  rules = {},
}) => {
  return (
    <Form.Group controlId={name}>
      {Label.length > 0 && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        size="sm"
        defaultValue={value}
        {...register}
      />
      {error && <span className="text-danger">{error}</span>}
    </Form.Group>
  );
};

export default Input;
