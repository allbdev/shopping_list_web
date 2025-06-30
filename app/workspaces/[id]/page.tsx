import { api } from "@/services/server";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import React from "react";
import { getUserToken } from "@/services/auth";
import ClientSideWorkspace from "./client";

async function getWorkspace({ token, id }: { token: string; id: string }) {
  try {
    const query = Promise.all([
      api.get(`/workspaces/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      api.get(`/workspaces/${id}/product-lists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    ]).then(([workspace, productsList]) => ({
      workspace: workspace.data.data,
      productsList: productsList.data.data,
    }));
    return query;
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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const token = await getUserToken();
  const { id } = await params;

  console.log(token);

  if (!token) {
    redirect("/auth/login");
  }

  const data = await getWorkspace({ token, id });

  return (
    <ClientSideWorkspace
      workspace={data?.workspace}
      productsList={data?.productsList}
    />
  );
}
