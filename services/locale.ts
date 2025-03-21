"use server";

import { defaultLocale, Locale } from "@/services/domain";
import { cookies } from "next/headers";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return ((await cookies()).get(COOKIE_NAME)?.value || defaultLocale) as Locale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}

export const getMessages = async (locale: Locale) => {
  if (locale === "pt") {
    return ptMessages;
  }

  return {};
};

const ptMessages = {
  hello: "Olá",
  world: "Mundo",
};
