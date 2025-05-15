import { routing } from "@/i18n";
import { MainLayoutWidget } from "@/widgets/main-layout";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";

export default async function MainLayout({
  children,
  params,
}: PropsWithChildren & { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return <MainLayoutWidget>{children}</MainLayoutWidget>;
}
