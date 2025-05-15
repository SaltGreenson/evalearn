export type ProfileFormFieldProps<T extends object> = {
  data: T;
};

export type CreateFormFieldProps<T extends object> = {
  defaultValues?: Partial<T>;
};

export type FilterFormFieldProps<T extends object> = {
  defaultValues?: Partial<T>;
};

export type ProfileGeneralInfoFormFieldProps<T extends object> = Omit<
  ProfileFormFieldProps<T>,
  "error"
> & {
  title?: string;
  linked?: boolean;
};
