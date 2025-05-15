import { SelectOption, TranslationType } from "../types";

type BuildOptions<T> = {
  elements: T[];
  valueKey: keyof T;
  t?: TranslationType<"">;
  labelKey?: keyof T;
};

export function buildSelectOption<T>({
  elements,
  valueKey,
  t,
  labelKey,
}: BuildOptions<T>): Record<string, SelectOption> {
  const options: Record<string, SelectOption> = {};

  for (const item of elements) {
    if (typeof item !== "object" && item) {
      options[String(item)] = { value: item, label: String(item) };
      continue;
    }

    if (labelKey) {
      (item as unknown as { label: string }).label = t
        ? t(item[labelKey] as string)
        : String(item[labelKey]);
    }

    options[item[valueKey] as string] = item as unknown as { label: string };
  }

  return options as Record<string, SelectOption>;
}
