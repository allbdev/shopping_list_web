import * as yup from "yup";

export interface LoginForm {
  email: string;
  password: string;
}

export const loginFormSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export const defaultValues = loginFormSchema.getDefault();
