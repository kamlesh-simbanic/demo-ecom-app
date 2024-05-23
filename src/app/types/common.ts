export type ErrorValidation = {
  [key: string]: string;
};

export type ColumnType<T> = {
  key: string;
  label: string;
  sortable?: boolean;
  Render?: (value: T) => JSX.Element;
};
