"use client";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Input } from "@/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginForm, loginFormSchema, defaultValues } from "./domain";
import { Button } from "@/components/Button";
import { api } from "@/services/server";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setUserToken } from "@/services/auth";

export default function Login() {
  const router = useRouter();
  const intl = useIntl();
  const form = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await api.post("/users/login", data);

      api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      setUserToken(response.data.token);

      toast.success(
        intl.formatMessage({
          id: "loginSuccess",
          defaultMessage: "Login successfully",
        }),
      );
      router.push("/workspaces");
    } catch {
      toast.error(
        intl.formatMessage({
          id: "loginError",
          defaultMessage: "Error logging in",
        }),
      );
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="mx-auto flex h-screen w-[600px] max-w-[90%] flex-col items-center justify-center gap-4">
        <FormattedMessage id="login" defaultMessage="Login on shopping list" />
        <Input
          placeholder={intl.formatMessage({
            id: "email",
            defaultMessage: "Email",
          })}
          {...form.register("email")}
        />
        <Input
          type="password"
          placeholder={intl.formatMessage({
            id: "password",
            defaultMessage: "Password",
          })}
          {...form.register("password")}
        />
        <Button type="submit">
          <FormattedMessage id="loginButton" defaultMessage="Login" />
        </Button>
      </div>
    </form>
  );
}
