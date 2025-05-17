"use client";

import {
  ColorCard,
  Flex,
  FlexColumn,
  FlexItem,
  PageLayout,
  Text,
  VariantCard,
} from "@/shared/ui";
import { useTranslations } from "next-intl";

function Home() {
  const mT = useTranslations("Menu");
  const t = useTranslations("UiKit");

  return (
    <PageLayout title={mT("uiKit")}>
      <FlexColumn height="max-content" padding width="100%">
        <PageLayout title={t("fonts")} size="large">
          <Flex height="max-content" padding width="100%" gap={28}>
            <FlexItem>
              <VariantCard head="GraphikLCG-Thin (100)" center>
                <Text weight={100} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Extralight (200)" center>
                <Text weight={200} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Light (300)" center>
                <Text weight={300} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Regular (400)" center>
                <Text weight={400} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Medium (500)" center>
                <Text weight={500} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Semibold (600)" center>
                <Text weight={600} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Bold (700)" center>
                <Text weight={700} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
            <FlexItem>
              <VariantCard head="GraphikLCG-Black (900)" center>
                <Text weight={900} color="--color-black" size="large">
                  {t("textExample")}
                </Text>
              </VariantCard>
            </FlexItem>
          </Flex>
        </PageLayout>
        <PageLayout title={t("colors")} size="large">
          <FlexColumn height="max-content" padding width="100%">
            <PageLayout title={t("white")} size="medium">
              <Flex padding height="max-content">
                <ColorCard color="#ffffff" description="Primary" bordered />
                <ColorCard color="#fbfcfe" description="light gray" bordered />
                <ColorCard color="#f3f7fd" description="details" />
                <ColorCard color="#f0f4ff" description="background" />
                <ColorCard color="#e8edf8" description="Border" />
                <ColorCard color="#e4eafa" description="menu border" />
                <ColorCard color="#d2ddff" description="placeholder" />
                <ColorCard color="#d2ddff" description="menu active" />
                <ColorCard
                  color="#8a91b1"
                  description="Light Blue"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#6b6b75"
                  description="font color"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#506271"
                  description="gray"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#000000"
                  description="black"
                  fontColor="--color-primary"
                />
              </Flex>
            </PageLayout>
            <PageLayout title={t("blue")} size="medium">
              <Flex padding height="max-content">
                <ColorCard
                  color="#d2ddff"
                  description="menu active"
                  fontColor="--color-black"
                />
                <ColorCard
                  color="#002395"
                  description="blue"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#0033c0"
                  description="blue hover"
                  fontColor="--color-primary"
                />
              </Flex>
            </PageLayout>

            <PageLayout title={t("red")} size="medium">
              <Flex padding height="max-content">
                <ColorCard
                  color="#ffaaa6"
                  description="red light"
                  fontColor="--color-black"
                />
                <ColorCard
                  color="#ff3b30"
                  description="red"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#ff4640e5"
                  description="red hover"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#d30d03"
                  description="red disabled"
                  fontColor="--color-primary"
                />
              </Flex>
            </PageLayout>

            <PageLayout title={t("orange")} size="medium">
              <Flex padding height="max-content">
                <ColorCard
                  color="#ff9500"
                  description="orange"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#ff9500d5"
                  description="orange hover"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#b86b00"
                  description="orange disabled"
                  fontColor="--color-primary"
                />
              </Flex>
            </PageLayout>

            <PageLayout title={t("green")} size="medium">
              <Flex padding height="max-content">
                <ColorCard
                  color="#acffc1"
                  description="green light"
                  fontColor="--color-black"
                />
                <ColorCard
                  color="#34c759"
                  description="green"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#34c759de"
                  description="green hover"
                  fontColor="--color-primary"
                />
                <ColorCard
                  color="#009625"
                  description="green disabled"
                  fontColor="--color-primary"
                />
              </Flex>
            </PageLayout>
          </FlexColumn>
        </PageLayout>
      </FlexColumn>
    </PageLayout>
  );
}

export default Home;
