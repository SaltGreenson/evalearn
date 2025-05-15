import { TableProps } from "@/shared/ui";
import { ProfileFormFieldProps } from "./form-field-props.type";

export type GridProps<T extends object, F extends object = {}> = {
  isLoading?: boolean;
  data: T[];
  filter?: F;
} & Pick<TableProps<T>, "size"> &
  Omit<ProfileFormFieldProps<T>, "data">;

export type FilterProps<T extends object> = {
  filterDefaultValues?: T;
  onReset: VoidFunction;
  onSubmit: (data: T) => void;
  isFiltersSelected?: boolean;
};

export type FilterPropsWithHandlers<T extends object> = {
  isFilterOpen: boolean;
  closeFilter: VoidFunction;
  openFilter: VoidFunction;
} & FilterProps<T>;
