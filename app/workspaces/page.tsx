import { api } from "@/services/server";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import React from "react";
import { getUserToken } from "@/services/auth";
import ClientSideWorkspaces from "./client";

async function getWorkspaces({ token }: { token: string }) {
  try {
    const query = await api.get("/workspaces", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return query.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        redirect("/auth/login");
      }
    } else {
      console.error(error);
    }
  }
}

export default async function Workspaces() {
  const token = await getUserToken();

  if (!token) {
    redirect("/auth/login");
  }

  const query = await getWorkspaces({ token });

  return <ClientSideWorkspaces workspaces={query.data} />;
}
