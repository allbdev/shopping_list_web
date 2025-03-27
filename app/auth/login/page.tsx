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
import { useMutation } from "@tanstack/react-query";

export default function Login() {
  const router = useRouter();
  const intl = useIntl();
  const form = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues,
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: (data: LoginForm) => api.post("/users/login", data),
    onSuccess: (data) => {
      setUserToken(data.data.token);
      router.push("/workspaces");
    },
    onError: () => {
      toast.error(
        intl.formatMessage({
          id: "loginError",
          defaultMessage: "Error logging in",
        }),
      );
    },
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      login(data);
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
          disabled={isPending}
          {...form.register("email")}
        />
        <Input
          type="password"
          placeholder={intl.formatMessage({
            id: "password",
            defaultMessage: "Password",
          })}
          disabled={isPending}
          {...form.register("password")}
        />
        <Button type="submit" disabled={isPending}>
          <FormattedMessage id="loginButton" defaultMessage="Login" />
        </Button>
      </div>
    </form>
  );
}
