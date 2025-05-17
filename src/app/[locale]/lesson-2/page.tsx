"use client";

import { ColorType } from "@/shared/lib";
import {
  Flex,
  FlexColumn,
  ProfileLayout,
  ProfilePreview,
  Text,
  VariantCard,
} from "@/shared/ui";
import { useTranslations } from "next-intl";

const renderItem = (
  left?: number,
  right?: number,
  top?: number,
  bottom?: number,
  zIndex: number = 1,
  color: ColorType = "--color-gray"
) => {
  return (
    <div
      style={{
        position: "absolute",
        left,
        right,
        top,
        bottom,
        zIndex,
        width: "100px",
        height: "100px",
        backgroundColor: `var(${color})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
    />
  );
};

function Lesson2Page() {
  const mT = useTranslations("Menu");
  const t = useTranslations("Lesson2");

  return (
    <ProfileLayout
      title={mT("lesson2")}
      preview={
        <ProfilePreview title={[{ label: t("previewTitle") }]}>
          <Text>{t("task")}</Text>
        </ProfilePreview>
      }
    >
      <FlexColumn width="100%" padding excludeTopPadding gap={18}>
        <VariantCard head={t("variant1")}>
          {renderItem(15, undefined, 15)}
        </VariantCard>

        <VariantCard head={t("variant2")}>
          {renderItem(undefined, 15, undefined, 15)}
        </VariantCard>

        <VariantCard head={t("variant3")}>
          {renderItem(15, undefined, 15, undefined)}
          {renderItem(45, undefined, 45, undefined, 2, "--color-red")}
        </VariantCard>

        <VariantCard head={t("variant4")}>
          <Flex centerH centerV width="100%">
            {renderItem(undefined, undefined, undefined, 15)}
          </Flex>
        </VariantCard>
      </FlexColumn>
    </ProfileLayout>
  );
}

export default Lesson2Page;
