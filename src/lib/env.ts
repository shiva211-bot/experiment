import { z } from "zod";

const environmentSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().optional().default("http://localhost:3000"),
  AUTH_SECRET: z.string().min(32).optional(),
  DATABASE_URL: z.string().optional(),
});

export const env = environmentSchema.parse(process.env);

export const isServer = typeof window === "undefined";
