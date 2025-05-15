import { SelectOption } from "@/shared/lib";

export function filterOptions<T extends SelectOption>(
  options: Record<string, T>,
  searchString?: string
) {
  if (searchString?.trim()) {
    searchString = searchString.toLowerCase().trim();
  }
  const filtered: Record<string, T> = {};

  for (const [value, data] of Object.entries(options)) {
    if (searchString && !data.label.toLowerCase().includes(searchString)) {
      continue;
    }

    filtered[value] = data;
  }

  return filtered;
}
