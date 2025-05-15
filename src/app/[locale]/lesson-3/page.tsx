"use client";

import { ProfileLayout } from "@/shared/ui";
import { useTranslations } from "next-intl";

function Lesson1Page() {
  const mT = useTranslations("Menu");

  return (
    <ProfileLayout title={mT("lesson3")} preview={<div></div>}></ProfileLayout>
  );
}

export default Lesson1Page;
