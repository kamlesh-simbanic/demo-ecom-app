import { ErrorValidation } from "@/app/types/common";

export const validateAddress = (
  address: any
): {
  isValid: boolean;
  errors: ErrorValidation;
} => {
  const errors: ErrorValidation = {};

  if (!address.houseNo.trim()) {
    errors.houseNo = "House number is required";
  }

  if (!address.street.trim()) {
    errors.street = "Street is required";
  }

  if (!address.city.trim()) {
    errors.city = "City is required";
  }

  if (!address.province.trim()) {
    errors.province = "Province is required";
  }

  if (!address.postalCode.trim()) {
    errors.postalCode = "Postal code is required";
  } else if (!/^\d{5}(-\d{4})?$/.test(address.postalCode)) {
    errors.postalCode = "Postal code is invalid";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
