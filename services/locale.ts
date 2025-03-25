"use server";

import { defaultLocale, Locale } from "@/services/domain";
import { cookies } from "next/headers";
import { Cookies } from "@/services/cookies";
export async function getUserLocale() {
  return ((await cookies()).get(Cookies.locale)?.value ||
    defaultLocale) as Locale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(Cookies.locale, locale);
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
  login: "Login na lista de compras",
  email: "Email",
  password: "Senha",
  loginButton: "Entrar",
};
