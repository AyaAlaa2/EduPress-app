import { z } from "zod";

export const commentSchema = z.object({
  name: z.string().min(2, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  comment: z.string().min(5, "Comment is required."),
  remember: z.boolean().default(false),
});
