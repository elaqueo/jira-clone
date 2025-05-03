import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(1, "Required")
    .max(256, "Password must be at most 256 characters long"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(256, "Password must be at most 256 characters long"),
});
