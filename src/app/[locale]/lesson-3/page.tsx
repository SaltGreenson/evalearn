"use client";

import {
  FlexColumn,
  ProfileLayout,
  ProfilePreview,
  Table,
  Text,
  VariantCard,
} from "@/shared/ui";
import { useTranslations } from "next-intl";

function Lesson3Page() {
  const mT = useTranslations("Menu");
  const t = useTranslations("Lesson3");

  return (
    <ProfileLayout
      title={mT("lesson3")}
      preview={
        <ProfilePreview title={[{ label: t("previewTitle") }]}>
          <FlexColumn width="100%">
            <Text>{t("task")}</Text>
            <Table
              head={[
                { key: "key", label: t("name") },
                { key: "value", label: t("value") },
                { key: "description", label: t("description") },
              ]}
              source={[
                {
                  key: "weight",
                  value: t("valueNumber"),
                  description: t("descriptionWeight"),
                },
                {
                  key: "size",
                  value: t("valueSize"),
                  description: t("descriptionSize"),
                },
                {
                  key: "bold",
                  value: t("valueBoolean"),
                  description: t("descriptionBold"),
                },
                {
                  key: "light",
                  value: t("valueBoolean"),
                  description: t("descriptionLight"),
                },
                {
                  key: "color",
                  value: t("valueString"),
                  description: t("descriptionColor"),
                },
                {
                  key: "nowraw",
                  value: t("valueBoolean"),
                  description: t("descriptionNowrap"),
                },
                {
                  key: "linkTo",
                  value: t("valueString"),
                  description: t("descriptionLinkTo"),
                },
              ]}
            ></Table>
          </FlexColumn>
        </ProfilePreview>
      }
    >
      <FlexColumn padding excludeTopPadding width="100%" gap={18}>
        <VariantCard head={t("variant1")} center>
          <Text>{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant2")} center>
          <Text bold>{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant3")} center>
          <Text light>{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant4")} center>
          <Text size="small">{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant5")} center>
          <Text size="medium">{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant6")} center>
          <Text size="large">{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant7")} center>
          <Text size="title">{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant8")} center>
          <Text weight={900}>{t("textExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant9")} center>
          <Text linkTo="https://google.com">{t("textLinkExample")}</Text>
        </VariantCard>

        <VariantCard head={t("variant10")} center>
          <Text color="--color-red">{t("textExample")}</Text>
        </VariantCard>
      </FlexColumn>
    </ProfileLayout>
  );
}

export default Lesson3Page;
