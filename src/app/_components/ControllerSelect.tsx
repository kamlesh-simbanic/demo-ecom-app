import React, { useState } from "react";
import { Col, Form } from "react-bootstrap";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

import Select from "react-select";

interface InputProps {
  name: string;
  label?: string;
  error?: string;
  rules?: RegisterOptions<FieldValues>;
  control?: Control<FieldValues, any>;
  options: {
    value: string;
    label: string;
  }[];
}

const ControllerSelect: React.FC<InputProps> = ({
  name,
  label = "",
  error,
  rules = {},
  control,
  options = [],
}) => {
  return (
    <Form.Group controlId={name}>
      {label.length > 0 && <Form.Label>{label}</Form.Label>}
      <Controller
        name="role"
        control={control}
        defaultValue=""
        rules={rules}
        render={({ field }) => <Select options={options} {...field} />}
      />
      {error && <span className="text-danger">{error}</span>}
    </Form.Group>
  );
};

export default ControllerSelect;
