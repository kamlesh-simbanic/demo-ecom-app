import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form } from "react-bootstrap";
import dayjs from "dayjs";

const CustomDatePicker = ({
  control,
  name,
  status,
  label,
  isInvalid,
  readOnly = false,
  disabled = false,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: status === "Evaluation Preparation" }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <DatePicker
            selected={value ? dayjs(value).toDate() : null}
            onChange={(date: any) => onChange(date)}
            customInput={
              <Form.Control
                size="sm"
                isInvalid={!value && isInvalid}
                readOnly={readOnly}
              />
            }
            placeholderText="MM/DD/YYYY"
            readOnly={readOnly}
            disabled={disabled}
          />
          <Form.Control.Feedback type="invalid">
            {error && !value ? "This field is required." : ""}
          </Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};

export default CustomDatePicker;
