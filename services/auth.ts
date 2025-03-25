"use server";

import { cookies } from "next/headers";
import { Cookies } from "./cookies";

const getUserToken = async () => {
  const token = (await cookies()).get(Cookies.token);
  return token?.value;
};

const setUserToken = async (token: string) => {
  (await cookies()).set(Cookies.token, token);
};

export { getUserToken, setUserToken };
