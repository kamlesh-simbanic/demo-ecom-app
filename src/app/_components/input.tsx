import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Label } from "reactstrap";

interface InputProps {
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  readOnly,
  label,
  onChange,
}) => {
  return (
    <Form.Group controlId={name}>
      {Label.length > 0 && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={readOnly}
        size="sm"
      />
    </Form.Group>
  );
};

export default Input;
