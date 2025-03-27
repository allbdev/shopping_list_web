"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";
import { IntlProvider } from "react-intl";
import { Locale } from "@/services/domain";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({
  children,
  messages,
  locale,
}: {
  children: React.ReactNode;
  messages: Record<string, string>;
  locale: Locale;
}) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <IntlProvider messages={messages} locale={locale} defaultLocale="en">
          <Toaster />
          {children}
        </IntlProvider>
      </Theme>
    </QueryClientProvider>
  );
};
