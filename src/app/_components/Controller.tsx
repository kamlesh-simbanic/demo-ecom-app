import { Controller } from "react-hook-form";
import { Form, FormControl } from "react-bootstrap";
import { instanceSelectField } from "../_services/muiHelpers";

const ControllerInput = ({
  name,
  control,
  error,
  rules,
  as,
  label,
  disable = false,
  readOnly = false,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <FormControl
            {...field}
            // {...instanceSelectField(field)}
            as={as} // Assuming CurrencyInput is a custom component
            isInvalid={!!error}
            type="text"
            placeholder=""
            size="sm"
            readOnly={readOnly}
            disable={disable}
          />
          <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
      )}
    />
  );
};

export default ControllerInput;
