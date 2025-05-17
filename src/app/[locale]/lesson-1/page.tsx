"use client";

import {
  Flex,
  FlexColumn,
  FlexItem,
  ProfileLayout,
  ProfilePreview,
  Text,
  VariantCard,
} from "@/shared/ui";
import { useTranslations } from "next-intl";

const renderItem = (value: number) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        minWidth: "100px",
        backgroundColor: "var(--color-gray)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text color="--color-primary" size="large">
        {value}
      </Text>
    </div>
  );
};

function Lesson1Page() {
  const mT = useTranslations("Menu");
  const t = useTranslations("Lesson1");

  return (
    <ProfileLayout
      title={mT("lesson1")}
      preview={
        <ProfilePreview title={[{ label: t("previewTitle") }]}>
          <Text>{t("task")}</Text>
        </ProfilePreview>
      }
    >
      <FlexColumn width="100%" padding excludeTopPadding gap={18}>
        <VariantCard head={t("variant1")}>
          <Flex width="100%" height="max-content">
            <FlexItem>{renderItem(1)}</FlexItem>
            <FlexItem>{renderItem(2)}</FlexItem>
            <FlexItem>{renderItem(3)}</FlexItem>
            <FlexItem>{renderItem(4)}</FlexItem>
            <FlexItem>{renderItem(5)}</FlexItem>
            <FlexItem>{renderItem(6)}</FlexItem>
            <FlexItem>{renderItem(7)}</FlexItem>
            <FlexItem>{renderItem(8)}</FlexItem>
            <FlexItem>{renderItem(9)}</FlexItem>
          </Flex>
        </VariantCard>

        <VariantCard head={t("variant2")}>
          <Flex width="100%">
            <FlexColumn width="200px">
              <FlexItem>{renderItem(1)}</FlexItem>
              <FlexItem>{renderItem(2)}</FlexItem>
              <FlexItem>{renderItem(3)}</FlexItem>
            </FlexColumn>
            <FlexColumn width="200px">
              <FlexItem>{renderItem(4)}</FlexItem>
              <FlexItem>{renderItem(5)}</FlexItem>
            </FlexColumn>
            <FlexColumn width="200px">
              <FlexItem>{renderItem(6)}</FlexItem>
            </FlexColumn>
          </Flex>
        </VariantCard>

        <VariantCard head={t("variant3")}>
          <Flex width="100%" betweenH centerH>
            <FlexColumn width="200px">
              <FlexItem>{renderItem(1)}</FlexItem>
              <FlexItem>{renderItem(2)}</FlexItem>
              <FlexItem>{renderItem(3)}</FlexItem>
            </FlexColumn>
            <FlexColumn width="200px">
              <FlexItem>{renderItem(4)}</FlexItem>
              <FlexItem>{renderItem(5)}</FlexItem>
            </FlexColumn>
            <FlexColumn width="200px">
              <FlexItem>{renderItem(6)}</FlexItem>
            </FlexColumn>
          </Flex>
        </VariantCard>

        <VariantCard head={t("variant4")} center>
          <Flex width="100%" height="100%" gap={16}>
            <FlexItem>{renderItem(1)}</FlexItem>
            <FlexItem>{renderItem(2)}</FlexItem>
            <FlexItem>{renderItem(3)}</FlexItem>
          </Flex>
        </VariantCard>
      </FlexColumn>
    </ProfileLayout>
  );
}

export default Lesson1Page;
