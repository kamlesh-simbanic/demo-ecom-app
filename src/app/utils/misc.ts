export const getStringField = (formData: FormData, name: string) => {
  return formData.get(name) as string;
};

export const getNumberField = (formData: FormData, name: string) => {
  return parseInt(getStringField(formData, name));
};

export const createFormData = (formData: FormData) => {
  return {
    formData,
    getStringField(name: string) {
      return this.formData.get(name) as string;
    },
    getNumberField(name: string) {
      return parseInt(this.getStringField(name));
    },
  };
};

export const formatNumber = (
  value: number,
  defaultValue = "N/A"
): number | string =>
  value ? new Intl.NumberFormat("en-US").format(value) : defaultValue;

type NumberOptions = {
  locales: string;
  currency: string;
  minDecimals: number;
  maxDecimals: number;
};

export const currencyFormat = (
  value: number,
  options: NumberOptions = {
    locales: "en-US",
    currency: "USD",
    minDecimals: 0,
    maxDecimals: 2,
  }
) =>
  new Intl.NumberFormat(options.locales, {
    style: "currency",
    currency: options.currency,
    minimumFractionDigits: options.minDecimals,
    maximumFractionDigits: options.maxDecimals,
  }).format(value);
