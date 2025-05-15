import type { Metadata } from "next";
import "./globals.css";
import "./variables.css";

import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";

import { PropsWithChildren } from "react";

const graphik = localFont({
  src: [
    {
      path: "/fonts/GraphikLCG-Thin.woff2",
      weight: "100",
      style: "normal",
    },

    {
      path: "/fonts/GraphikLCG-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/GraphikLCG-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
});

export const metadata: Metadata = {
  title: "EVALEARN",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={graphik.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
      </head>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
