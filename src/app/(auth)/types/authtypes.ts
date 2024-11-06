import { FieldError, UseFormRegister } from "react-hook-form";
import { z, ZodType } from "zod"; // Add new import

export type SignUpFormData = {
    name : string;
    email: string;
    password: string;
    confirmPassword: string;
  };

export type SignInFormData = {
    email: string;
    password: string;
  };

export const SignInformSchema = z.object({
    email: z.string().trim().min(1).email(),
    password: z.string().min(8),
  });

export const SignUpformSchema = z.object({
    name: z.string().trim().min(1).email(),
    email: z.string().trim().min(1).email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // path of error
  });
export type SignUpValidFieldNames =
  | "name"
  | "email"
  | "password"
  | "confirmPassword";
  
export type SignInValidFieldNames =
  | "email"
  | "password";  

export type SignUpFormFieldProps = {
    type: string;
    placeholder: string;
    name: SignUpValidFieldNames;
    register: UseFormRegister<SignUpFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};
export type SignInFormFieldProps = {
    type: string;
    placeholder: string;
    name: SignInValidFieldNames;
    register: UseFormRegister<SignInFormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
};

