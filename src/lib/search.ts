import { z } from "zod";

export const projectSearchSchema = z.object({
  q: z.string().trim().optional(),
  status: z.enum(["all", "live", "in-review", "planning"]).default("all"),
  category: z.string().optional(),
});
