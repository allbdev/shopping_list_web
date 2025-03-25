import { getUserToken } from "@/services/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const token = await getUserToken();

  if (!token) {
    redirect("/auth/login");
  } else {
    redirect("/workspaces");
  }
}
