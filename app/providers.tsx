"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";
import { IntlProvider } from "react-intl";
import { Locale } from "@/services/domain";
import { Toaster } from "react-hot-toast";
export const Providers = ({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: Record<string, string>;
  locale: Locale;
}) => {
  return (
    <Theme>
      <IntlProvider messages={messages} locale={locale} defaultLocale="en">
        <Toaster />
        {children}
      </IntlProvider>
    </Theme>
  );
};
