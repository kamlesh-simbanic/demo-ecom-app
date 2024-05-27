import { ControllerRenderProps } from "react-hook-form";

export const instanceSelectField = (
  field: Partial<ControllerRenderProps>,
  defaultValue: string | number | boolean | undefined = ""
) => ({
  ...field,
  value: field.value ?? defaultValue,
});
