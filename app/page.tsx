import { getUserToken } from "@/services/auth";
import { api } from "@/services/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = await getUserToken();

  if (!token) {
    redirect("/auth/login");
  } else {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    redirect("/workspaces");
  }
}
