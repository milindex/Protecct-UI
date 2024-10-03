import { plusJakartaSans } from "@/lib/fonts";
import "@/app/_styles/_global.scss";
import Header from "@/app/_components/Header/Header";
import Footer from "@/app/_components/Footer/Footer";
import LetsConnectBanner from "./_components/Common/LetsConnectBanner/LetsConnectBanner";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import theme from "@/lib/theme";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body className={plusJakartaSans.className}>
        <MantineEmotionProvider>
          <MantineProvider theme={theme} stylesTransform={emotionTransform} defaultColorScheme="light">
            <Header />
            {children}
            <LetsConnectBanner />
            <Footer />
          </MantineProvider>
        </MantineEmotionProvider>
      </body>
    </html>
  );
}
