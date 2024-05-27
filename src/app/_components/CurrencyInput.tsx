"use client";

import { ChangeEvent, ElementType, forwardRef } from "react";

import { InputBaseComponentProps } from "@mui/material";
import { IMaskInput } from "react-imask";

interface Props {
  onChange?: (value: ChangeEvent<HTMLInputElement>) => string;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  hideDecimal?: boolean;
}

const CurrencyInput = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      name,
      value,
      placeholder = "",
      onChange,
      hideDecimal,
      ...rest
    },
    ref
  ) => (
    <IMaskInput
      className={className}
      mask="$ num"
      value={String(value)}
      name={name}
      inputRef={ref}
      onAccept={(inputValue: string) => {
        if (typeof onChange === "function")
          onChange({
            target: { value: inputValue, name },
          } as ChangeEvent<HTMLInputElement>);
      }}
      placeholder={placeholder}
      {...rest}
      blocks={{
        num: {
          mask: Number,
          thousandsSeparator: ",",
          padFractionalZeros: !hideDecimal,
          min: 0,
          scale: 2,
          radix: ".",
          mapToRadix: ["."],
        },
      }}
    />
  )
);

CurrencyInput.displayName = "CurrencyInput";

export default CurrencyInput as ElementType<InputBaseComponentProps>;
