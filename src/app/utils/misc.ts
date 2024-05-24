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
