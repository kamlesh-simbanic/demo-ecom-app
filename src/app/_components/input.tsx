import { error } from "console";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Label } from "reactstrap";

interface InputProps {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
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
        disabled={readOnly}
        size="sm"
      />
      {error && <span className="text-danger">{error}</span>}
    </Form.Group>
  );
};

export default Input;
