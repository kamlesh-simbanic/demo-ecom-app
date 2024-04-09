// components/Input.tsx

import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface InputProps {
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  readOnly,
  onChange,
}) => {
  //   const [value, setValue] = useState(initialValue || "");

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const newValue = event.target.value;
  //     setValue(newValue);
  //     if (onChange) {
  //       onChange(newValue);
  //     }
  //   };

  return (
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={readOnly}
    />
  );
};

export default Input;
