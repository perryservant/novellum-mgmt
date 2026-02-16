import { z } from "zod";

export const registerSchema = z.object({
    email: z.email(),
    password: z.string().min(8),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    user_role: z.enum(["master", "manager", "user"]),
    avatar_url: z.url().optional(),
    assignee_ids: z.array(z.uuid()).optional(),
    appointee_ids: z.array(z.uuid()).optional()
});

export const loginSchema = z.object({
    email: z.email(),
    password: z.string()
});

export type RegisterRequest = z.infer<typeof registerSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
