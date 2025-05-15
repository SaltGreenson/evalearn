import { createTranslator, Messages } from "next-intl";

export type TranslationType<T extends string> = ReturnType<
  typeof createTranslator<Messages, T>
>;
